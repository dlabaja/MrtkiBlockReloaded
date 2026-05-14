declare global {
    type char = string;
    interface ProcessedNode extends Node {
        hasReplacedText?: boolean;
    }
}

export {}