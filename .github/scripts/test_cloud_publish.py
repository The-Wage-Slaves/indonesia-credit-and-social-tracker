from __future__ import annotations

import importlib.util
import pathlib
import unittest
from unittest import mock


HERE = pathlib.Path(__file__).resolve().parent
SPEC = importlib.util.spec_from_file_location(
    "cloud_publish",
    HERE / "cloud_publish.py",
)
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class CloudPublishCardTests(unittest.TestCase):
    def test_score_change_explains_direction(self):
        self.assertEqual(
            MODULE.score_change(67.5, 72.5),
            "较上周 72.5：-5.0点（压力缓和）",
        )
        self.assertEqual(
            MODULE.score_change(77.5, 72.5),
            "较上周 72.5：+5.0点（压力上升）",
        )

    def test_weekly_card_separates_index_direction_from_event_trigger(self):
        data = {
            "weeks": [
                {
                    "weekEnd": "2026-07-19",
                    "fearIndex": 72.5,
                    "engines": {
                        "news": {"score": 71.1},
                        "social": {"score": 69.1},
                    },
                },
                {
                    "weekEnd": "2026-07-26",
                    "fearIndex": 67.5,
                    "engines": {
                        "news": {"score": 60.0},
                        "social": {"score": 66.7},
                    },
                    "alert": {
                        "level": "red",
                        "triggerReasons": ["verified_severe_event"],
                        "active": [{
                            "id": "kredivo-kredifazz-purworejo-2026-07",
                            "hasPrimarySource": True,
                            "independentSourceCount": 3,
                        }],
                    },
                },
            ],
        }

        def fake_read(path, default=None):
            if path.endswith("credit-sentiment-pending.json"):
                return data
            if path.endswith("street_heat_history.json"):
                return []
            return default

        with mock.patch.object(MODULE, "read_json", side_effect=fake_read):
            summary = MODULE.weekly_summary()

        card_text = "\n".join(summary["lines"])
        self.assertIn("【每周二例行】", summary["title"])
        self.assertIn("较上周 72.5：-5.0点（压力缓和）", card_text)
        self.assertIn("即使指数比上周下降也会触发", card_text)
        self.assertIn("监管介入", card_text)
        self.assertIn("①确认留痕；②降级为观察；③驳回", card_text)


if __name__ == "__main__":
    unittest.main()

