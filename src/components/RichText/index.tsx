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

export type DescriptionType = TypedEditorState<
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

export type RichTextProps = {
  lexicalData: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
};

const RichTextComponent = ({ lexicalData }: RichTextProps) => {
  return (
    <div className="text-gray-400">
      <RichText data={lexicalData!} />
    </div>
  );
};

export default RichTextComponent;
