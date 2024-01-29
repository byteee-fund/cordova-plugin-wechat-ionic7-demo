import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonGrid, IonRow, IonToolbar, IonList, IonItem } from '@ionic/react';
import React, { useEffect } from 'react';


import './Home.css';

const Home: React.FC = () => {

  useEffect(() => {
    checkInstall();
  }, [])


  const checkInstall = () => {
    console.log(window.Wechat);
    if (window.Wechat) {
      window.Wechat.isWXAppInstalled(function (installed) {
        alert("Wechat installed: " + (installed ? "Yes" : "No"));
        }, function (reason) {
            alert("Failed: " + reason);
        });
    }
    
  }

  const handleLogin = () => {

    if (window.Wechat) {
      var scope = "snsapi_userinfo",
    state = "_" + (+new Date());

      window.Wechat.login({scope, state}, function (response) {
          alert(JSON.stringify(response));
      }, function (reason) {
          alert("Failed: " + reason);
      });
    }
  }

  const handleShare = () => {

    if (window.Wechat) {
      window.Wechat.share({
        text: "测试分享",
        scene: Wechat.Scene.TIMELINE
      }, function () {
        alert("Success");
      }, function (reason) {
        console.error(reason);
        alert("Failed: " + reason);
      });
    }
  }

  const handlePay = () => {

    if (window.Wechat) {
      var params = {
        partnerid: '10000100', // merchant id
        prepayid: 'wx201411101639507cbf6ffd8b0779950874', // prepay id
        noncestr: '1add1a30ac87aa2db72f57a2375d8fec', // nonce
        timestamp: '1439531364', // timestamp
        sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
      };
     
      window.Wechat.requestPayment(params, function () {
        alert("Success");
      }, function (reason) {
        alert("Failed: " + reason);
      });
    }
  }

  const handleOpenMiniProgram = () => {
    if (window.Wechat) {
      var params = {
        userName: 'gh_67210fc11b59',
        path: 'pages/index/index?name1=key1&name2=key2',
        miniprogramType: Wechat.Mini.RELEASE 
      };
      
      window.Wechat.launchMiniProgram(params,function(data){
          console.log(data);
      },function(){
          alert('error');
      })
    }
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="container">
          <IonList lines="full">
            <IonItem onClick={handleLogin}> 
              登录
            </IonItem>
            <IonItem onClick={handleShare}> 
              分享
            </IonItem>
            <IonItem onClick={handlePay}> 
              支付
            </IonItem>
            <IonItem onClick={handleOpenMiniProgram}> 
              打开微信小程序
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
