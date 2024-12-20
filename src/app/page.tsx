'use client';
import { Calendar, Ellipsis, Tags, User } from 'lucide-react';
import { useEffect, useState } from 'react';
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

import { Label, labelOptions } from './data';

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
      backgroundColor: isSelected ? data.color : isFocused ? 'rgba(0,0,0,0.1)' : undefined,
    };
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [assignee, setAssignee] = useState<Assignees>('nishykata');
  const [labelSelected, setLabelSelected] = useState<Label>(labelOptions[0]!);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex'>
        <div className='flex w-1/2 items-center rounded-lg border p-4'>
          <AppBadge className='mr-3' style={{ backgroundColor: labelSelected.color }}>
            {labelSelected.label}
          </AppBadge>
          <p>
            Pull request #1<span className='ml-2 text-xs opacity-70'>by {assignee}</span>
          </p>
          <AppDropdownMenu onOpenChange={setOpen} open={open}>
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
                      name='baihat'
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
      </div>
    </main>
  );
}
