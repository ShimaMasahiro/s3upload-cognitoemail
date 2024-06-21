// Program Name: UploadList.js
// Author: SHIMA Masahiro
// Creation      Date: 2024-03-04
// Last Modified Date: 2024-03-04

/**
 * アップロードリストを表示する
 * @param {Array} items - 表示するアップロードファイルのリスト
 * @param {Function} onDismiss - リストアイテムが削除されたときに呼び出される関数
 * @return {JSX.Element} アップロードリストを表示するReactコンポーネント
 * 
 * `TokenGroup` コンポーネントを使用して、リストアイテムをトークンとして表示する。
 * ユーザーがトークンの削除ボタンをクリックすると、`onDismiss`関数が呼び出され、
 * 対応するリストアイテムが削除される。
 * `limit`プロパティによって、表示されるアイテムの最大数を制限する。
 */
 
import React from 'react';
import { FormField , TokenGroup } from "@cloudscape-design/components";

const UploadList = ({ items, onDismiss }) => {
    return (
        <FormField 
            className="form-field"
        >
            <TokenGroup
                onDismiss={({detail: {itemIndex}}) => onDismiss(itemIndex)}
                items={items}
                alignment="vertical"
                limit={10}
            />
        </FormField> 
    );
};

export default UploadList;