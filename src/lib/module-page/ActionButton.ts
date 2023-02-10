export type ActionCallback = () => boolean | Promise<boolean> | void | Promise<void>;

export default interface ActionButton {
    /**
     * 标签
     */
    label: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否可见
     */
    visible?: boolean;
    /**
     *
     */
    isSecondary?: boolean;
    /**
     *
     */
    className?: string;
    /**
     *
     */
    style?: string;
    /**
     * 点击后执行的回调函数
     */
    callback?: ActionCallback;

}