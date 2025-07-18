export interface FormProps{
    title: string;
    onSubmit: () => void;
    error?: string;
    ctaText: string;
    ctaLink: string;
    ctaLinkText: string;
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    buttonText: string;
}

export type InputProps = {
  type?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}