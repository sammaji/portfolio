import { cn } from "@/lib/utils";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity";
import SyntaxHighlighter from "react-syntax-highlighter"
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

function urlFor(source: string) {
    return ImageUrlBuilder(client).image(source);
}

const image = ({ value }: any) => {
    if (!value?.asset?._ref) {
        return null;
    }
    return <img alt={value.alt} loading="lazy" src={urlFor(value).url()} />;
};

const A = ({ children, href }: any) => (
    <a
        href={href}
        className={cn("font-medium text-primary underline underline-offset-4")}
    >
        {children}
    </a>
);

const H2 = ({ children }: any) => (
    <h2 className={cn("&:not(:first-child):pt-4 text-xl font-title")}>
        {children}
    </h2>
);

const Code = ({ value }: any) => {
    return (
        <SyntaxHighlighter language={value.language} style={monokaiSublime}>
            {value.code}
        </SyntaxHighlighter>
    )
}

export const components = {
    types: { image, code: Code },
    block: { h2: H2 },
    marks: {
        link: ({ value, children }: any) => {
            const { blank, href } = value;
            return blank ? (
                <A href={href} target="_blank" rel="noopener">
                    {children}
                </A>
            ) : (
                <A href={href}>{children}</A>
            );
        },
    },
};
