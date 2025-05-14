import React, { FormEvent, JSX } from 'react';
import { CalendarGrey } from 'src/assets/icons';
import { classNames } from 'src/helpers/common';

import { FormInputNameChangeClientData } from '../types';
import { FormData, FormErrors, OnChangeFormInput } from 'src/hooks';
import { InputText } from 'src/components/InputText';
import { Button } from 'src/components/Button';

interface StateProps {
  document: string;
  formData: FormData;
  formErrors: FormErrors;
  state: boolean;
}

interface DispatchProps {
  onSubmit: (e: FormEvent) => void;
  onChange: OnChangeFormInput;
}

type Props = StateProps & DispatchProps;

export const ChangeClientDataContent: React.FC<Props> = ({
  onSubmit,
  document,
  formData,
  onChange,
  formErrors,
  state,
}): JSX.Element => {
  return (
    <div>
      <div className="mt-8 w-full">
        <form onSubmit={onSubmit}>
          <div className="mb-[20px]">
            <InputText
              name="document"
              label="CPF"
              placeholder="123.456.789-00"
              className={`appearance-none w-full
                rounded-md text-heading leading-tight focus:outline-none
                focus:shadow-outline text-xs font-dmsans font-normal`}
              maxLength={14}
              value={document}
              onChange={() => {
                return;
              }}
              disabled
            />
          </div>
          <div className="mb-[20px]">
            <InputText
              name="name"
              label="Nome completo"
              placeholder="Maria da Silva"
              className={`appearance-none w-full
                rounded-md text-heading leading-tight focus:outline-none
                focus:shadow-outline text-xs font-dmsans font-normal`}
              value={formData[FormInputNameChangeClientData.name]}
              onChange={(e) =>
                onChange(FormInputNameChangeClientData.name)(e.target.value)
              }
              error={formErrors.name && formErrors.name[0]}
            />
          </div>

          <div className="mb-[20px]">
            <InputText
              name="email"
              label="E-mail"
              placeholder="meuemail@email.com"
              className={`appearance-none w-full
                rounded-md text-heading leading-tight focus:outline-none
                focus:shadow-outline text-xs font-dmsans font-normal`}
              value={formData[FormInputNameChangeClientData.email]}
              onChange={(e) =>
                onChange(FormInputNameChangeClientData.email)(e.target.value)
              }
              error={formErrors.email && formErrors.email[0]}
            />
          </div>

          <div className="mb-[20px]">
            <InputText
              name="phone"
              label="Telefone"
              placeholder="(00) 0 0000-0000"
              className={`appearance-none w-full
                rounded-md text-heading leading-tight focus:outline-none
                focus:shadow-outline text-xs font-dmsans font-normal`}
              value={formData[FormInputNameChangeClientData.phone]}
              onChange={(e) =>
                onChange(FormInputNameChangeClientData.phone)(e.target.value)
              }
              error={formErrors.phone && formErrors.phone[0]}
            />
          </div>

          <div className="mb-[20px]">
            <InputText
              name="date"
              label="Data de nascimento"
              placeholder="DD/MM/AAAA"
              className={`appearance-none w-full
                rounded-md text-heading leading-tight focus:outline-none
                focus:shadow-outline text-xs font-dmsans font-normal`}
              value={formData[FormInputNameChangeClientData.date]}
              onChange={(e) =>
                onChange(FormInputNameChangeClientData.date)(e.target.value)
              }
              error={formErrors.date && formErrors.date[0]}
              renderForward={
                <button
                  className={classNames(
                    formErrors.date && formErrors.date[0]
                      ? 'right-0 bottom-7'
                      : 'right-0 bottom-3',
                    'absolute cursor-pointer mr-4'
                  )}
                  type="button"
                >
                  <div className="h-8 flex flex-col justify-center items-center">
                    <img src={CalendarGrey} style={{ cursor: 'none' }} />
                  </div>
                </button>
              }
            />
          </div>

          <div className="mb-[20px]">
            <InputText
              name="motherName"
              label="Nome da mãe"
              placeholder="Ex: Maria da Silva"
              className={`appearance-none w-full
                rounded-md text-heading leading-tight focus:outline-none
                focus:shadow-outline text-xs font-dmsans font-normal`}
              value={formData[FormInputNameChangeClientData.motherName]}
              onChange={(e) =>
                onChange(FormInputNameChangeClientData.motherName)(
                  e.target.value
                )
              }
              error={formErrors.motherName && formErrors.motherName[0]}
            />
          </div>

          <div
            className="mb-[20px] flex flex-col items-start justify-between"
            id="termsAndConditions"
          >
            <Button
              type="submit"
              title="Alterar meus dados"
              buttonStyle="primary"
              size="xlg"
              className="w-full"
              disabled={
                formData[FormInputNameChangeClientData.name] === '' ||
                formData[FormInputNameChangeClientData.email] === '' ||
                formData[FormInputNameChangeClientData.phone] === '' ||
                formData[FormInputNameChangeClientData.date] === '' ||
                state
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};
