export default {
  async fetch(request) {
    const targetUrl = "https://khsj.cn/a9x3p31vq25n8lp/";
    const resp = await fetch(targetUrl, { redirect: "follow" });
    const headers = new Headers(resp.headers);
    // 删除防iframe嵌套头部
    headers.delete("X-Frame-Options");
    headers.delete("Content-Security-Policy");
    return new Response(resp.body, { headers });
  }
};
