import * as React from "react";
import ReactMarkdown from "react-markdown";
import tocbot from "tocbot";

import story from "../data/renvmStory.md";

interface RenVMStoryProps {
}

interface RenVMStoryState {
    postText: string;
    tocHidden: boolean;
}

const flatten = (text: any, child: any): any => (
    typeof child === 'string'
        ? text + child
        : React.Children.toArray(child.props.children).reduce(flatten, text)
);

const HeadingRenderer = (props: any) => {
    var children = React.Children.toArray(props.children)
    var text = children.reduce(flatten, '')
    var slug = text.toLowerCase().replace(/\W/g, '-')
    return React.createElement('h' + props.level, { id: slug }, props.children)
}

export class RenVMStory extends React.Component<RenVMStoryProps, RenVMStoryState> {
    // private storyRef: HTMLDivElement | null = null;
    // private tocRef: HTMLDivElement | null = null;

    constructor(props: RenVMStoryProps) {
        super(props);
        this.state = {
            postText: "",
            tocHidden: true,
        };
    }

    public async componentDidMount(): Promise<void> {
        const resp = await fetch(story).then(resp => resp.text());
        this.setState({ postText: resp });
        tocbot.init({
            tocSelector: ".renvm--toc--contents",
            contentSelector: ".renvm--story",
            headingSelector: "h1, h2, h3",
            hasInnerContainers: true,
        });
    }

    public componentDidUpdate() {
        tocbot.refresh();
    }

    public render(): JSX.Element {
        const { tocHidden, postText } = this.state;
        return (
            <div>
                <div className="renvm--story">
                    <ReactMarkdown
                        source={postText}
                        renderers={{ heading: HeadingRenderer }}
                    />
                </div>
                <div className={`renvm--toc ${tocHidden ? "hidden" : ""}`}>
                    <h1>Table of contents</h1>
                    <div className="renvm--toc--contents" />
                    <div onClick={() => this.toggleTOC()} className="toc--button" />
                </div>
            </div>
        );
    }

    private toggleTOC = () => {
        this.setState({ tocHidden: !this.state.tocHidden });
    }
}