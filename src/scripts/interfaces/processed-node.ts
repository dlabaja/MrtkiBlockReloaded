export interface ProcessedNode extends Node {
    hasReplacedText?: boolean;
    originalParentNode?: ParentNode|null;
    originalTextContent?: string|null;
}