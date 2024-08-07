interface Window {
    Wechat: {
        isWXAppInstalled(callback: (installed: boolean) => void, errorCallback: (reason: any) => void): void;
        login(params: {scope: string, state: string}, callback: (response: any) => void, errorCallback: (reason: any) => void): void;
        shareText(params: {text: string, scene: number}, callback: () => void, errorCallback: (reason: any) => void): void;
        requestPayment(params: any, callback: () => void, errorCallback: (reason: any) => void): void;
        launchMiniProgram(params: any, callback: (data: any) => void, errorCallback: (reason: any) => void): void;
        launchWechatApp(callback: (data: any) => void, errorCallback: (err: any) => void): void;
        openCustomerServiceChat(params: any, callback: (res: any) => void, errorCallback: (err: any) => void): void;
        checkUniversalLinkReady(callback: (res: any) => void, errorCallback: (err: any) => void): void;
        Scene: {
            TIMELINE: number;
        };
        Mini: {
            RELEASE: number;
        };
    };
}
