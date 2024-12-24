import { Meta, StoryObj } from '@storybook/react';
import { Calendar, Ellipsis, Tags, User } from 'lucide-react';
import { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { AppBadge } from 'src/shared/components/badge/AppBadge';
import { AppButton } from 'src/shared/components/button/AppButton';
import {
  AppDropdownMenu,
  AppDropdownMenuContent,
  AppDropdownMenuGroup,
  AppDropdownMenuItem,
  AppDropdownMenuLabel,
  AppDropdownMenuPortal,
  AppDropdownMenuRadioGroup,
  AppDropdownMenuRadioItem,
  AppDropdownMenuSeparator,
  AppDropdownMenuSub,
  AppDropdownMenuSubContent,
  AppDropdownMenuSubTrigger,
  AppDropdownMenuTrigger,
} from 'src/shared/components/dropdown-menu/AppDropdownMenu';

interface Label {
  readonly color: string;
  readonly isDisabled?: boolean;
  readonly isFixed?: boolean;
  readonly label: string;
  readonly value: string;
}
const labelOptions: readonly Label[] = [
  { color: '#006b75', label: 'Ready for review', value: 'Ready for review' },
  { color: '#d73a4a', label: 'Bug', value: 'Bug' },
  { color: '#0075ca', label: 'Documentation', value: 'Documentation' },
  { color: '#cfd3d7', label: 'Duplicate', value: 'Duplicate' },
  { color: '#a2eeef', label: 'Enhancement', value: 'Enhancement' },
  { color: '#7057ff', label: 'Good first issues', value: 'Good first issues' },
  { color: '#008672', label: 'Help wanted', value: 'Help wanted' },
  { color: '#e4e669', label: 'Invalid', value: 'Invalid' },
];
type Assignees = 'nishykata' | 'takagi' | 'thang';
const listAssignees: Assignees[] = ['nishykata', 'takagi', 'thang'];

const selectStyles: StylesConfig<Label> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: 264,
  }),
  option: (styles, prop) => {
    const { data, isFocused, isSelected } = prop;
    return {
      ...styles,
      backgroundColor: isSelected ? data.color : isFocused ? 'rgba(0,0,255,0.2)' : undefined,
    };
  },
};

const meta = {
  component: AppDropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DropdownMenu/DropdownMenuSelect/DropdownMenuSelect',
} satisfies Meta<typeof AppDropdownMenu>;

export default meta;

type Story = StoryObj<typeof AppDropdownMenu>;

export const Default: Story = {
  render: () => {
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const [assignee, setAssignee] = useState<Assignees>('nishykata');
    const [labelSelected, setLabelSelected] = useState<Label>(labelOptions[0]!);
    return (
      <div className='flex w-[420px] items-center rounded-lg border p-4'>
        <AppBadge className='mr-3' style={{ backgroundColor: labelSelected.color }}>
          {labelSelected.label}
        </AppBadge>
        <p>
          Pull request #1<span className='ml-2 text-xs opacity-70'>by {assignee}</span>
        </p>
        <AppDropdownMenu>
          <AppDropdownMenuTrigger asChild>
            <AppButton className='ml-auto' variant='ghost'>
              <Ellipsis />
            </AppButton>
          </AppDropdownMenuTrigger>
          <AppDropdownMenuContent className='w-80'>
            <AppDropdownMenuLabel>Actions</AppDropdownMenuLabel>
            <AppDropdownMenuGroup>
              <AppDropdownMenuSub>
                <AppDropdownMenuSubTrigger>
                  <User />
                  <span>Assign to...</span>
                </AppDropdownMenuSubTrigger>
                <AppDropdownMenuPortal>
                  <AppDropdownMenuSubContent>
                    <AppDropdownMenuLabel>List assignees</AppDropdownMenuLabel>
                    <AppDropdownMenuRadioGroup
                      onValueChange={(value) => setAssignee(value as Assignees)}
                      value={assignee}>
                      {listAssignees.map((one) => (
                        <AppDropdownMenuRadioItem key={one} value={one}>
                          {one}
                        </AppDropdownMenuRadioItem>
                      ))}
                    </AppDropdownMenuRadioGroup>
                  </AppDropdownMenuSubContent>
                </AppDropdownMenuPortal>
              </AppDropdownMenuSub>
              <AppDropdownMenuItem>
                <Calendar />
                <span>Set due date...</span>
              </AppDropdownMenuItem>
            </AppDropdownMenuGroup>
            <AppDropdownMenuSeparator />
            <AppDropdownMenuSub>
              <AppDropdownMenuSubTrigger onFocus={() => setOpenSubmenu(true)}>
                <Tags />
                <span>Apply label</span>
              </AppDropdownMenuSubTrigger>
              {openSubmenu && (
                <AppDropdownMenuSubContent className='h-80 w-60'>
                  <Select
                    autoFocus
                    className='w-full'
                    classNamePrefix='select'
                    defaultValue={labelSelected}
                    menuIsOpen
                    name='label'
                    onChange={(val) => {
                      setOpenSubmenu(false);
                      setLabelSelected(val as Label);
                    }}
                    options={labelOptions}
                    styles={selectStyles}
                  />
                </AppDropdownMenuSubContent>
              )}
            </AppDropdownMenuSub>
          </AppDropdownMenuContent>
        </AppDropdownMenu>
      </div>
    );
  },
};
