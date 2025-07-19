import type { CastMember, CrewMember } from "./creditsTypes";

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

export type DetailsLayoutProps = {
  imageSrc: string;
  children: React.ReactNode;
}

export interface MiniCardProps {
  name: string
  imageUrl?: string
  onClick?: () => void
}

export type CastListProps = {
  cast: CastMember[];
}

export type CrewListProps = {
  crew: CrewMember[];
}