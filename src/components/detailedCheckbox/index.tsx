import React, { useCallback } from 'react';
import styled from 'styled-components';
import { colors, spacer, fontType, radius } from 'settings/style';

interface CheckboxOption {
  label: string;
  description?: string;
  value: string;
}

interface DetailedCheckboxProps {
  onChange?: (ids: string[]) => void;
  options: CheckboxOption[];
  defaultValue?: string[];
  disabled?: boolean;
  value?: string[];
}

function DetailedCheckbox({ onChange = () => {}, value = [], options }: DetailedCheckboxProps) {
  const onValueChange = useCallback(
    (id: string) => {
      if (value.includes(id)) {
        onChange(value.filter((item) => item !== id));
      } else {
        onChange([...value, id]);
      }
    },
    [onChange, value],
  );

  return (
    <>
      {options.map((option) => (
        <OptionItem
          onClick={() => onValueChange(option.value)}
          checked={value.includes(option.value)}
          key={option.value}
        >
          <OptionLabel>{option.label}</OptionLabel>
          {!!option.description && <OptionDescription>{option.description}</OptionDescription>}
        </OptionItem>
      ))}
    </>
  );
}

export default DetailedCheckbox;

const OptionItem = styled.div<{ checked: boolean }>`
  border: 1px solid ${({ checked }) => (checked ? colors.accent : colors.primary300)};
  padding: ${spacer.lg};
  margin-bottom: ${spacer.lg};
  border-radius: ${radius.lg};
  background: linear-gradient(
    96deg,
    ${colors.white},
    ${({ checked }) => (checked ? colors.accent : colors.primary300)} 99%
  );
  cursor: pointer;
`;

const OptionLabel = styled.div`
  ${fontType.md}
`;

const OptionDescription = styled.div``;
