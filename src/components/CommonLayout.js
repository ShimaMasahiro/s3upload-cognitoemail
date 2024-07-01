// Program Name: src/components/CommonLayout.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-28
// Last Modified Date: 2024-06-27

import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { AppLayout } from "@cloudscape-design/components";
import TopNavi from './TopNavi';
import ServiceNavigation from './ServiceNavigation';
import ToolsHelpPanel from './ToolsHelpPanel';

import SplitPanelHeader from './SplitPanelHeader';


/**
 * 共通レイアウトコンポーネント
 * 
 * @param {Object} props コンポーネントのプロパティ
 * @param {React.ReactNode} props.children ページ固有のコンテンツ
 * @param {boolean} props.navigationOpen ナビゲーションの開閉状態
 * @param {Function} props.onNavigationChange ナビゲーションの開閉状態を変更するハンドラ
 * @param {Object} props.ariaLabels アクセシビリティラベル
 */

const CommonLayout = ({ children }) => (
  <Authenticator>
    {({ signOut, user }) => (
      <>
        <TopNavi user={user} navbarItemClick={(e) => {
          if (e.detail.id === 'signout') {
            signOut();
          }
        }} />
        <AppLayout
          toolsOpen = {false}
          navigationOpen={true}
          splitPanelOpen={false}      
          tools = {<ToolsHelpPanel />}
          navigation = {<ServiceNavigation />}
          splitPanel = {<SplitPanelHeader />}
          content = {children}
        />
      </>
    )}
  </Authenticator>
);

export default CommonLayout;