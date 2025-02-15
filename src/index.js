import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import ChapUseEffect from "./Chapter/ChapPropx/ChapUseEffect";
// import PracticeUseEffectAxios from "./practice/PracticeUseEffectAxios";
// import PizzaList from "./BackendAPI/PizzaList";
import RootPath from "./RootPath";
import LoginRoute from "./LoginRoute";
import {BrowserRouter} from "react-router-dom";
import ReactRouterDom from "./ReactRouterDom";
// import ReactRouterDom from "./ReactRouterDom";
// import reportWebVitals from './reportWebVitals';
// import ChapUseState from "./Chapter/ChapUseState";
// import PracticeUseState from "./practice/PracticeUseState";
// import ChapProps from "./Chapter/ChapProps";
// import PracticeProps from "./practice/PracticeProps";
// import ChapPropsFunction from "./Chapter/ChapPropx/ChapPropsFunction";
// import ChapPropsDefault from "./Chapter/ChapPropx/ChapPropsDefault";
// import PracticePropsDefault from "./practice/PracticePropsDefault";
// import ChapPropsArray from "./Chapter/ChapPropx/ChapPropsArray";
// import PracticePropArray from "./practice/PracticePropArray";
// import PracticePropsFunction from "./practice/PracticePropsFunction";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* BrowserRouter 로 이동할 경로를 설정했다면 index.js 최상단에 브라우저 라우터로
          모든 javascript, javascriptXML 파일을 감싸줘야한다

          BrowserRouter 와 Routes 는 모든 파일에서 최초 1회만 작성
       */}
      {/* return 내에 사용할 수 있는 주석

      <App /> 는 필수로 사용해야하는 자바스크립트 파일이 아님
      만약 App.js 가 아니라 다른 파일을 사용하길 원한다면
      파일명.js 를 import 해서 사용할 수 있음
      <App />
       */}
      {/*
      <ChapUseState/>
      <PracticeUseState />
      <ChapProps />
      <PracticeProps/>
      <PracticePropsFunction />
      <ChapPropsFunction />
      <ChapPropsDefault />
      <PracticePropsDefault />
      <ChapPropsArray />
      <PracticePropArray />
      <PracticePropArray />
      <ChapUseEffect />
      <PracticeUseEffectAxios />
      <PizzaList />
      <RootPath />
      */}
      <LoginRoute />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
