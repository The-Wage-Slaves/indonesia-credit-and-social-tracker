# Reddit / YouTube / DeepSeek Key 申请指引

## 〇、DeepSeek（反对率分类用，约2分钟，费用每周<¥0.1）

1. 打开 https://platform.deepseek.com 用手机号/邮箱注册
2. 左侧菜单 → **API Keys** → **创建 API key**，起个名字（如 `street-heat`）
3. 复制弹出的 `sk-` 开头的一串（**只显示一次**，关掉就得重建）
4. 粘进 `street_heat_config.yaml` 的 `llm.api_key` 引号里
5. 充值最低额度即可（约¥10 能用一年以上——每周分类约200条标题，单次约¥0.01）

配好后跑 `python street_heat.py`，确认单会多出"G. 反对率"一行和政治条目明细。


拿到 key 后填进同目录的 `street_heat_config.yaml`（保持引号），下次跑脚本自动生效。
**这两个 key 都是免费额度，本项目每周查询量远低于上限，不会产生费用。**

> ⚠ **前提：全程需要能访问 Google 的网络环境（挂代理）。**
> Reddit 表单里的人机验证（reCAPTCHA）和 Google Cloud 控制台都是 Google 服务，
> 国内直连会加载不出来/点了没反应。

---

## 一、Reddit（测 r/indonesia 政治讨论热度）—— **已停用，可跳过**

> 2026-07-15：用户账号在 Reddit 收紧API政策后无法完成注册，
> 已改用 **Kaskus 开放接口**（kaskus.co.id/api/hot_threads，无需任何key）替代。
> 以下步骤仅在将来想恢复 Reddit 源时参考。

1. 用浏览器登录你的 Reddit 账号（没有就注册一个，普通账号即可）
2. 打开 https://www.reddit.com/prefs/apps
3. 拉到页面最下面，点 **create another app...**（或 create app）按钮
4. 表单这样填：
   - **name**: `street-heat`（随便起）
   - 类型三选一：选 **script**
   - **description**: 留空
   - **about url**: 留空
   - **redirect uri**: 填 `http://localhost:8080`（必填项，随便一个本地地址即可）
5. 勾选"进行人机身份验证"复选框（reCAPTCHA，可能弹出选图验证；加载不出来见顶部网络提示），
   然后点 **create app**
6. 创建后在应用卡片上找两个东西：
   - 应用名字**正下方**一行不带标签的小字乱码串 = **client_id**（约14位）
   - **secret** 后面的乱码串 = **client_secret**（约27位）
7. 把两串分别粘进 `street_heat_config.yaml` 的 `client_id` 和 `client_secret` 引号里

## 二、YouTube（测抗议/政治视频播放热度）

1. 用 Google 账号打开 https://console.cloud.google.com/
2. 首次进入会让你同意条款；然后顶部项目下拉框 → **新建项目**，名字随便（如 `street-heat`），点创建
3. 左上角菜单 ☰ → **API和服务** → **库**，搜索 `YouTube Data API v3`，点进去点 **启用**
4. 左侧 → **凭据** → 顶部 **+ 创建凭据** → **API密钥**
5. 新版界面会要求必选"API 限制"：点开**"选择 API 限制"下拉框**，
   搜索并勾选 **YouTube Data API v3**，再点创建。
   （下拉里找不到它 = 第3步的"启用"没做，回去先启用再来）
6. 弹出的 `AIza...` 开头的一串就是 key，复制
7. 粘进 `street_heat_config.yaml` 的 `api_key` 引号里

## 三、验证

配置好后在这个目录跑一次：

```
python street_heat.py
```

确认单里 E/F 两行从 `○ 待配置` 变成 `✓` 即成功。

## 安全提醒

- `street_heat_config.yaml` 含密钥：不要发给别人、不要提交到公开 GitHub 仓库
- 以后若做 GitHub Actions 云端部署，key 会改放仓库的 Secrets 里（到时我来弄）
