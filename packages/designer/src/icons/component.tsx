import { SVGIcon, IconProps } from 'alilc-lowcode-utils';

export function IconComponent(props: IconProps) {
  return (
    <SVGIcon viewBox="0 0 1024 1024" {...props}>
      <path d="M783.5648 437.4528h-18.0224V336.6912c0-43.8272-35.6352-79.4624-79.4624-79.4624h-110.592V241.664c0-90.9312-73.728-164.6592-164.6592-164.6592-90.9312 0-164.6592 73.728-164.6592 164.6592v15.5648H155.2384c-43.8272 0-79.4624 35.6352-79.4624 79.4624v131.4816c0 16.7936 13.9264 30.72 30.72 30.72h56.1152c56.9344 0 103.2192 46.2848 103.2192 103.2192s-46.2848 103.2192-103.2192 103.2192H106.496c-16.7936 0-30.72 13.9264-30.72 30.72v131.4816c0 43.8272 35.6352 79.4624 79.4624 79.4624h531.2512c43.8272 0 79.4624-35.6352 79.4624-79.4624v-100.7616h18.0224c90.9312 0 164.6592-73.728 164.6592-164.6592-0.4096-90.9312-74.1376-164.6592-165.0688-164.6592z m0 267.8784h-48.7424c-16.7936 0-30.72 13.9264-30.72 30.72v131.4816c0 9.8304-8.192 18.0224-18.0224 18.0224H155.2384c-9.8304 0-18.0224-8.192-18.0224-18.0224v-100.7616h25.3952c90.9312 0 164.6592-73.728 164.6592-164.6592 0-90.9312-73.728-164.6592-164.6592-164.6592h-25.3952V336.6912c0-9.8304 8.192-18.0224 18.0224-18.0224h121.6512c16.7936 0 30.72-13.9264 30.72-30.72V241.664c0-56.9344 46.2848-103.2192 103.2192-103.2192s103.2192 46.2848 103.2192 103.2192v46.2848c0 16.7936 13.9264 30.72 30.72 30.72h141.312c9.8304 0 18.0224 8.192 18.0224 18.0224v131.4816c0 16.7936 13.9264 30.72 30.72 30.72h48.7424c56.9344 0 103.2192 46.2848 103.2192 103.2192s-46.2848 103.2192-103.2192 103.2192z" />
    </SVGIcon>
  );
}
IconComponent.displayName = 'Component';
