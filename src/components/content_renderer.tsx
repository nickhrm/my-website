'use client';

import {
    BlocksRenderer,
    type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";


export default function BlockRendererClient({
    content,
}: {
    content: any;
}) {


    if (!content) return null;
    return (
        <BlocksRenderer content={content} blocks={{

            paragraph: ({ children }) => (
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-black">
                    {children}
                </p>
            ),

            heading: ({ children, level }) => {
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
            },

        }

        }
            modifiers={{
                bold: ({ children }) => <span className="font-bold">{children}</span>,
                italic: ({ children }) => <span className="italic">{children}</span>,
            }}
        >
        </BlocksRenderer >
    );
}