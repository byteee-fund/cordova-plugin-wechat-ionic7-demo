import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.toolkk.app',
  appName: 'cordova-plugin-wechat-ionic7-demo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  cordova: { 
    preferences: { 
      wechat_app_id: "wx785b8bd6fc1e2116",
      wechat_universal_link: "https://sk8xqb.xinstall.com.cn/tolink/"
    } 
  },
  ios: {
    cordovaLinkerFlags: ["-ObjC", "-all_load"]
  }
};

export default config;
