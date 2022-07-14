import { SVGIcon, IconProps } from 'alilc-lowcode-utils';

export function IconEye(props: IconProps) {
  return (
    <SVGIcon viewBox="0 0 1024 1024" {...props}>
      <path d="M512 256c-163.8 0-291.4 97.6-448 256 134.8 135.4 248 256 448 256 199.8 0 346.8-152.8 448-253.2C856.4 397.2 709.6 256 512 256z m0 438.6c-98.8 0-179.2-82-179.2-182.6 0-100.8 80.4-182.6 179.2-182.6s179.2 82 179.2 182.6c0 100.8-80.4 182.6-179.2 182.6z" />
      <path d="M512 448c0-15.8 5.8-30.2 15.2-41.4-5-0.8-10-1.2-15.2-1.2-57.6 0-104.6 47.8-104.6 106.6s47 106.6 104.6 106.6 104.6-47.8 104.6-106.6c0-4.6-0.4-9.2-0.8-13.8-11 8.6-24.6 13.8-39.6 13.8-35.6 0-64.2-28.6-64.2-64z" />
    </SVGIcon>
  );
}

IconEye.displayName = 'IconEye';