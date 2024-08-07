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
        scene: window.Wechat.Scene.TIMELINE
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
        "mchId": "1634490117",
        "prepayId": "wx08003856845618cb07d4c6c18119400001",
        "package": "Sign=WXPay",
        "nonceStr": "rfSvBjwu4yd9zpazvmDyZtzDNSjz1m5t",
        "timeStamp": "1723048736",
        "sign": "ZbdI4AHWJpNXUXuW5cIK+txks7aP0ijZIV7//VMcq15Rb78w0OlGVeyF8J81El3IMinceJ7Kk3e0Pj/lKEHBu0qR+at50MkgmQ2YAnaFaWtpPFHHZqbNvG4Ptf4VQOxGB/oPoPQqmpeSiV4hKiED9o5dyPEjLemEYWw9Dd3xsq1n1lWLocyVtwdR3AIgRFdrOher6MHnSvPx46y73EohWIXPKbNJd1eWEEDm7D2lMaC61ptfhEgdqnLKlJKFEDXYBEFMH9Cz54xjw/Oj8V6qyV7dUAAuultVT6VPKMuoxL9L5nDIftxzHzYPKJprpPKyZXhK5xepVGHFyAfFzGBqRw=="
      }
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
        miniprogramType: window.Wechat.Mini.RELEASE
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
