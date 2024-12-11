import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import type {
  SerializedAutoLinkNode,
  SerializedBlockNode,
  SerializedHorizontalRuleNode,
  SerializedLinkNode,
  SerializedListItemNode,
  SerializedListNode,
  SerializedParagraphNode,
  SerializedQuoteNode,
  SerializedRelationshipNode,
  SerializedTextNode,
  SerializedUploadNode,
  TypedEditorState,
  SerializedHeadingNode,
} from '@payloadcms/richtext-lexical';

export type RichTextProps = {
  lexicalData: TypedEditorState<
    | SerializedAutoLinkNode
    | SerializedBlockNode
    | SerializedHorizontalRuleNode
    | SerializedLinkNode
    | SerializedListItemNode
    | SerializedListNode
    | SerializedParagraphNode
    | SerializedQuoteNode
    | SerializedRelationshipNode
    | SerializedTextNode
    | SerializedUploadNode
    | SerializedHeadingNode
  >;
};

const RichTextComponent = ({ lexicalData }: RichTextProps) => {
  return (
    <div className="text-gray-400">
      <RichText data={lexicalData} />
    </div>
  );
};

export default RichTextComponent;
