import { cva } from "class-variance-authority";

const textVariants = cva("text-foreground", {
  variants: {
    heading: {
      "heading-72":
        "text-[72px] leading-[72px] font-semibold tracking-[-4.32px]",
      "heading-64":
        "text-[64px] leading-[64px] font-semibold tracking-[-3.84px]",
      "heading-56":
        "text-[56px] leading-[56px] font-semibold tracking-[-3.36px]",
      "heading-48":
        "text-[48px] leading-[56px] font-semibold tracking-[-2.88px]",
      "heading-40":
        "text-[40px] leading-[48px] font-semibold tracking-[-2.4px]",
      "heading-32":
        "text-[32px] leading-[40px] font-semibold tracking-[-1.28px]",
      "heading-24":
        "text-[24px] leading-[32px] font-semibold tracking-[-0.96px]",
      "heading-20":
        "text-[20px] leading-[26px] font-semibold tracking-[-0.4px]",
      "heading-16":
        "text-[16px] leading-[24px] font-semibold tracking-[-0.32px]",
      "heading-14":
        "text-[14px] leading-[20px] font-semibold tracking-[-0.28px]",
    },
    buttons: {
      "button-16": "text-[16px] leading-[20px] font-medium",
      "button-14": "text-[14px] leading-[20px] font-medium",
      "button-12": "text-[12px] leading-[16px] font-medium",
    },
    labels: {
      "label-20": "text-[20px] leading-[32px]",
      "label-18": "text-[18px] leading-[20px]",
      "label-16": "text-[16px] leading-[20px]",
      "label-14": "text-[14px] leading-[20px]",
      "label-13": "text-[13px] leading-[16px]",
      "label-12": "text-[12px] leading-[16px]",
    },
    copy: {
      "copy-24": "text-[24px] leading-[36px]",
      "copy-20": "text-[20px] leading-[36px]",
      "copy-18": "text-[18px] leading-[28px]",
      "copy-16": "text-[16px] leading-[24px]",
      "copy-14": "text-[14px] leading-[20px]",
      "copy-13": "text-[13px] leading-[18px]",
    },
  },
});

export { textVariants };
