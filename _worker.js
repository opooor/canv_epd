export default   默认的 {
  async   异步   获取    异步fetch   异步(){
    const   常量 CANVA   帆布 = "https://hymmaker.my.canvasite.cn/"https://hymmaker.my.canvasite.cn/;
    const   常量 api = `https://api.screenshotmachine.com?key=demo&url=${encodeURIComponent(CANVA)}&dimension=1024x758`;
    const   常量 r = await   等待 fetch(api);
    return new   新 Response   响应(await   等待 r.blob(),{headers:{"Content-Type":"image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png"   "image/png","Cache-Control":"no-cache"}})
  }
}
