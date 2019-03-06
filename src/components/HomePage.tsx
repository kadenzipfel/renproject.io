import * as React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Block from "./Block";
import ContactItem from "./ContactItem";
import ContentBlock from "./ContentBlock";
import { ExpandableList } from "./ExpandableList";
import Featured from "./Featured";
import Featurettes from "./Featurettes";
import Footer from "./Footer";
import GridItem from "./GridItem";
import Header from "./Header";
import ListItem from "./ListItem";
import { MediumBannerInstance } from "./MediumBanner";
import { REN_URLS } from "../lib/constants";

class HomePage extends React.Component {
    public render(): JSX.Element {
        const whiteRenLogo = require("../styles/images/logo-white.svg");
        const techStackImage = require("../styles/images/illustration-tech-stack-2.svg");
        const codeImage = require("../styles/images/icons/rp-icon-code.svg");
        const codeImageHover = require("../styles/images/icons/rp-icon-code-hvr.svg");
        return (
            <div className="home">
                <Header />
                <Featured />
                {MediumBannerInstance}
                <div className="section section--renex">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <img className="techstack--img--mobile" src={techStackImage} />
                                <ContentBlock subtitle="A suite of privacy-focused tools for dark pools and other financial applications.">
                                    <ExpandableList items={[
                                        {
                                            title: "Application Layer",
                                            description: <p>Build applications that run in complete secrecy, where no one can reveal the inputs or application state. Utilize our core financial layers to empower your applications to make private transactions and to interoperate between blockchains.</p>,
                                            image: "illustration-application.svg",
                                        },
                                        {
                                            title: "Dark Pool Layer",
                                            description: <p>Any party can setup and deploy their own dark pool exchange utilizing a hidden order book. Traders can open orders, and settle order matches, in secret. Prices and amounts are never revealed.</p>,
                                            image: "illustration-darkpool.svg",
                                        },
                                        {
                                            title: "Interoperability Layer",
                                            description: <p>Instantly execute trustless swaps between blockchains in secret, without hash-time lock contracts. Work with tokens on their native blockchains without the need for trusted third-parties, federations, or centralized exchanges.</p>,
                                            image: "illustration-interoperability.svg",
                                        },
                                        {
                                            title: "Zero Knowledge Transactions",
                                            description: <p>Store and transfer tokens from any blockchain without exposing wallet balances or transaction amounts. Enables sensitive OTC deals and eliminates front-running. Use this tool to build your own completely private settlement layer.</p>,
                                            image: "illustration-zeroknowledge.svg",
                                        },
                                        {
                                            title: "RenVM",
                                            description: <>
                                                <p>RenVM powers the entire ecosystem. It is a general purpose virtual machine allowing anyone to perform private computations in a decentralized network without revealing information to anyone.</p>
                                                <p>Leverage RenVM to build your own unstoppable private application.</p>
                                            </>,
                                            image: "illustration-renvm.svg",
                                        }]} />
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section--protocol">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="Dark pool trading of digital assets with privacy protecting settlement.">
                                    <p>RenEx is an officially supported dark pool exchange for trading digital assets in secret, built on Ren. Trade now without revealing your orders, free from front-running and counterparty risk.</p>
                                    <div className="content--buttons">
                                        <div>
                                            <a className="button" href={REN_URLS.renEx} target="_blank" rel="noopener noreferrer">Trade on RenEx</a>
                                        </div>
                                        <a className="content--link" href="https://republicprotocol.zendesk.com/hc/en-us/categories/360000458534-Trading-on-RenEx">More about RenEx</a>
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                    <Featurettes />
                </div>
                <div className="section section--darknodes">
                    <Block />
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="Darknodes power RenVM, earning rewards for their work.">
                                    <p>Darknodes cooperate to run secret multiparty computations, power all layers of Ren, and are capable of running any kind of application.</p>
                                    <div className="content--columns">
                                        <div className="content--links">
                                            <a href="https://republicprotocol.zendesk.com/hc/en-us/articles/360004268853-Darknode-Quick-Summary">More about Darknodes</a>
                                        </div>
                                        <div className="content--links">
                                            <a href="https://republicprotocol.zendesk.com/hc/en-us/categories/360000394674-Darknode-Operation">Operate a Darknode</a>
                                        </div>
                                    </div>
                                    <p className="section--darknodes--footer">Darknode fees are calculated by the exchange. For more information, visit our ZenDesk.</p>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section--token">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="The REN token provides security to the network.">
                                    <p>A REN bond is needed in order to operate a Darknode.</p>
                                    <div className="content--buttons">
                                        <a className="content--link" href="https://republicprotocol.zendesk.com/hc/en-us/articles/360004243014-Details-of-REN-Token-Crowdsale">More about REN token</a>
                                    </div>
                                </ContentBlock>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="exchanges">
                    <div className="container">
                        <div className="row">
                            <h2 className="exchanges--heading">Find REN on these exchanges</h2>
                            <GridItem type="exchanges" link="https://idex.market" image="idex.png" height={48} />
                            <GridItem type="exchanges" link="https://www.binance.com" image="binance.svg" height={48} brightness={30} />
                            <GridItem type="exchanges" link="https://www.okex.com" image="okex.png" height={61} />
                            <GridItem type="exchanges" link="https://www.hbg.com" image="huobi.png" height={52} />
                            <GridItem type="exchanges" link="https://www.uex.com" image="uex.png" height={50} />
                        </div>
                    </div>
                </div>
                <div className="section section--builders">
                    <div className="container">
                        <div className="row">
                            <div className="section--content">
                                <ContentBlock subtitle="Build with Ren.">
                                    <p>Build a Dark Pool or utilize our other privacy preserving layers to create financial applications. Get in touch if you have a project idea you’d like to discuss with the Ren team.</p>
                                    <div className="content--buttons">
                                        <div>
                                            <a className="button" href="https://github.com/republicprotocol" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} pull="left" />Go to Github</a>
                                        </div>
                                        <a className="content--link" href="mailto:build@renproject.io">build@renproject.io</a>
                                    </div>
                                </ContentBlock>
                            </div>
                            <div className="section--list">
                                <div className="list">
                                    <ListItem title="Republic-Go &rarr;" description="An official reference implementation of Republic Protocol, written in Go." link="https://github.com/republicprotocol/republic-go" image={codeImage} imageHover={codeImageHover} />
                                    <ListItem title="Republic-Sol &rarr;" description="An implementation of Republic Protocol smart contracts, written in Solidity." link="https://github.com/republicprotocol/republic-sol" image={codeImage} imageHover={codeImageHover} />
                                    <ListItem title="RenEx-Sol &rarr;" description="RenEx Ethereum contracts, written in Solidity." link="https://github.com/republicprotocol/renex-sol" image={codeImage} imageHover={codeImageHover} />
                                    <ListItem title="Co-Go &rarr;" description="A high level concurrency and parallelism libary." link="https://github.com/republicprotocol/co-go" image={codeImage} imageHover={codeImageHover} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="renex-banner">
                    <div className="container">
                        <div className="renex-banner--content">
                            <div className="renex-banner--logo">
                                <img src={whiteRenLogo} />
                            </div>
                            <div>
                                <h1>Trade in complete privacy.</h1>
                                <p>RenEx Beta is now live</p>
                            </div>
                        </div>
                        <div className="renex-banner--buttons">
                            <a className="button" href={REN_URLS.renEx} target="_blank" rel="noopener noreferrer">Trade on RenEx</a>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="container">
                        <ContactItem name="Partnerships" email="partnerships@republicprotocol.com" />
                        <ContactItem name="Community Initiatives" email="community@republicprotocol.com" />
                        <ContactItem name="Technical Support" email="technical@republicprotocol.com" />
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default HomePage;
