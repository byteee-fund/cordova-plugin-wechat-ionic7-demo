/*
 * Copyright (c) [2024] [BSF]
 * [https://byteee.fund]
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


import { IonContent, IonHeader, IonPage, IonTitle, IonFooter, IonGrid, IonRow, IonToolbar, IonList, IonItem } from '@ionic/react';
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
        console.log("login result")
        console.log(response);
          alert(JSON.stringify(response));
      }, function (reason) {
          alert("Failed: " + reason);
      });
    }
  }

  const handleShare = () => {

    if (window.Wechat) {
      window.Wechat.shareText({
        text: "测试分享",
        scene: Wechat.Scene.TIMELINE
      }, function () {
        console.log("share result")
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
        timeStamp: '1667792176',
        mchId: '1800009365',
        prepayId: 'wx07113616363804b19dde94884922030000',
        package: 'Sign=WXPay',
        nonceStr: '8ne443gjxxg',
        sign: '4FF5900870B5C5BCB089789BC004156426C46512CE566DB17C131747E09ADEBA'
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

  const handleWechatApp = () => {
    if (window.Wechat) {
      window.Wechat.launchWechatApp(function(data){
          console.log(data);
      },function(){
          alert('error');
      })
    }
  }


  const handleOpenCustomerService = () => {
    if (window.Wechat) {
      window.Wechat.openCustomerServiceChat({
        corpId: "xxxx", 
        url: "https://work.weixin.qq.com/kfid/kfcxxxxx"
      }, function(res) {
           console.log('open success');
      }, function(err) {
           console.error(err);
        }
      );
    }
  }

  const checkUniversalLinkReady = () => {
    window.Wechat.checkUniversalLinkReady(
      function(res) {
          console.log('check universal link success:', res);
      },
      function(err) {
        console.error(err);
      }
    )  
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cordova Plugin Wechat Ionic7 Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cordova Plugin Wechat Ionic7 Demo</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="container">
          <IonList lines="full">
            <IonItem onClick={handleLogin}> 
              Login
            </IonItem>
            <IonItem onClick={handleShare}> 
              ShareText
            </IonItem>
            <IonItem onClick={handlePay}> 
              Pay
            </IonItem>
            <IonItem onClick={handleOpenMiniProgram}> 
              LaunchMiniProgram
            </IonItem>
            <IonItem onClick={handleWechatApp}> 
              LaunchWechtApp
            </IonItem>
            <IonItem onClick={handleOpenCustomerService}> 
              OpenCustomerService
            </IonItem>
            <IonItem onClick={checkUniversalLinkReady}> 
              CheckUniversalLinkReady(ios only)
            </IonItem>
          </IonList>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>2024 ©  BSF</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
