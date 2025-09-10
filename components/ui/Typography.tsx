import React, { ElementType } from 'react';
import clsx from 'clsx';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as: ElementType;
  variant: keyof typeof typographyStyles;
  children: React.ReactNode;
  className?: string;
}

const typographyStyles = {
  heading1: 'text-[48px] leading-[56px] font-normal tracking-[-1px]',
  heading2: 'text-[40px] leading-[48px] font-normal tracking-[-0.5px]',
  heading3: 'text-[32px] leading-[40px] font-normal tracking-[0px]',
  heading4: 'text-[24px] leading-[32px] font-semibold tracking-[0px]',
  heading5: 'text-[20px] leading-[28px] font-semibold tracking-[0px]',
  heading6: 'text-[18px] leading-[24px] font-semibold tracking-[0px]',

  paragraphLarge: 'text-[18px] leading-[24px] font-semibold tracking-[0.2px]',
  paragraphMedium: 'text-[14px] leading-[20px] font-semibold tracking-[0.2px]',
  paragraphSmall: 'text-[16px] leading-[24px] font-semibold tracking-[0px]',
  paragraphExtraSmall: 'text-[14px] leading-[20px] font-normal tracking-[0px]',

  caption: 'text-[12px] leading-[16px] font-normal tracking-[0.2px]',
  overline: 'text-[12px] leading-[20px] font-semibold tracking-[0.7px]',
};

const Typography = ({
  as = 'p',
  variant,
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component = as;
  const baseClass = variant ? typographyStyles[variant] : '';

  return (
    <Component className={clsx(baseClass, className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
