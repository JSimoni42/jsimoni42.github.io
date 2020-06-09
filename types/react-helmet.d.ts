declare module 'react-helmet' {
  type IMeta = {
    name: string;
    content: string;
  } | {
    property: string;
    content: string;
  };

  interface HelmetProps {
    htmlAttributes: {
      lang?: string;
    };
    titleTemplate: string;
    meta: IMeta[];
    title: string;
  }

  export const Helmet: React.FC<HelmetProps>
}