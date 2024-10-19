import React, { useState, FC, ChangeEvent, FocusEvent, CSSProperties } from 'react';

interface InputFieldProps {
    name?: string;
    placeholder: string;
    type?: 'text' | 'email' | 'password' | 'textarea'; 
    error?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
    password?: boolean;
    required?: boolean;
    style?: CSSProperties;
    value?: string;
    onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void; 
    min?: number;
    label?: string;
    ariaInvalid?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    ariaDescribedby?: string;
    Inputref?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>; 
    onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    readOnly?: boolean;
    toolTipId?: string;
    toolTip?: string;
    height?: string;
    width?: string;
}

const InputField: FC<InputFieldProps> = ({
    name,
    placeholder,
    type = 'text',
    error,
    onChange,
    password = false,
    required = false,
    style,
    value,
    onBlur,
    min,
    label,
    ariaInvalid,
    ariaDescribedby,
    Inputref,
    onFocus,
    readOnly = false,
    toolTipId,
    toolTip,
    height = '56px',
    width = "100%",
    ...props
}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <div className="relative pt-2 pb-2">
            {label && (
                <label htmlFor={name} className="block pb-1 text-base font-bold text-primaryGray">
                    {label}
                </label>
            )}
            <div className={`flex items-center ${height} ${width}`} style={style}>
                {type === 'textarea' ? ( 
                    <textarea
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        required={required}
                        style={style}
                        onBlur={onBlur}
                        value={value}
                        onChange={onChange}
                        aria-invalid={ariaInvalid}
                        aria-describedby={ariaDescribedby}
                        ref={Inputref as React.RefObject<HTMLTextAreaElement>} 
                        onFocus={onFocus}
                        readOnly={readOnly}
                        className={`h-20 w-full pl-2 pr-4 border border-gray-400 rounded-md text-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
                        {...props}
                    />
                ) : (
                    <input
                        type={password ? (hidePassword ? 'password' : 'text') : type}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        required={required}
                        style={style}
                        onBlur={onBlur}
                        value={value}
                        onChange={onChange}
                        min={min}
                        aria-invalid={ariaInvalid}
                        autoComplete="off"
                        aria-describedby={ariaDescribedby}
                        ref={Inputref as React.RefObject<HTMLInputElement>} 
                        onFocus={onFocus}
                        readOnly={readOnly}
                        className={`h-12 w-full pl-2 border border-gray-400 rounded-md text-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : ''}`}
                        {...props}
                    />
                )}
                {password && (
                    <div
                        className="absolute right-4 cursor-pointer font-bold text-blue-500"
                        onClick={() => setHidePassword(!hidePassword)}
                    >
                        <p className="text-primaryBlue font-semibold text-sm">
                            {hidePassword ? 'SHOW' : 'HIDE'}
                        </p>
                    </div>
                )}
            </div>
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
};

export default InputField;
