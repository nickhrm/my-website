


import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';
const paragraph = (props: any) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
        {props.text}
    </p>
);

//@ts-ignore
const heading = ({ children, level }) => {
    switch (level) {
        case 1:
            return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {children}
            </h2>
        case 2:
            return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {children}
            </h3>
        default:
            return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {children}
            </h4>
    }
};
//@ts-ignore
const image = ({ src, alt }) => (
    <img src={src} alt={alt} />
);

export default function ContentRenderer(content: any) {
    return <BlocksRenderer content={content} blocks={{
        paragraph,
        //@ts-ignore
        heading,
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
        //@ts-ignore
        image,
    }}
        modifiers={{
            bold: ({ children }) => <span className="font-bold">{children}</span>,
            italic: ({ children }) => <span className="italic">{children}</span>,
        }}
    >
    </BlocksRenderer>
}
