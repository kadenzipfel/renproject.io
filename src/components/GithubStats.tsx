import * as React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { fetchRepos, GithubRepo, GithubStatistics, calculateStats } from "../lib/github";
import { GithubBlock, GithubLanguageDot } from "./GithubBlock";
import { naturalTime } from "@renex/react-components";

interface GithubStatsProps {
    usernames: string[];
    limit?: number;
}

interface GithubStatsState {
    repos: GithubRepo[];
    stats: null | GithubStatistics;
    ready: boolean;
    error: boolean;
}

export class GithubStats extends React.Component<GithubStatsProps, GithubStatsState> {
    constructor(props: GithubStatsProps) {
        super(props);
        this.state = {
            repos: [],
            stats: null,
            ready: false,
            error: false,
        };
    }

    public async componentDidMount(): Promise<void> {
        console.log("start did mount");
        await this.updateRepos();
        console.log("finished did mount");
    }

    public render(): JSX.Element {
        const { stats, error, ready, repos } = this.state;
        return (
            <div className="gh--stats">
                {error ? "an error occurred. try again later." : !ready ? "Loading..." : 
                <Tabs>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Top Repos</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="gh--stats--overview">
                            <p>{stats && stats.totalStars}</p>
                            <div>{stats && stats.languages.map(lang => <GithubLanguageDot key={lang} language={lang} />)}</div>
                            <p>{stats && naturalTime(stats.lastUpdated.getTime() / 1000, { message: "", suffix: "ago", countDown: false })}</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="github--top--repos">
                            {repos.map(repo => <GithubBlock key={repo.id} repo={repo} />)}
                        </div>
                    </TabPanel>
                </Tabs>}
            </div>
        );
    }

    private updateRepos = async (): Promise<void> => {
        const { limit, usernames } = this.props;

        try {
            let repos: GithubRepo[] = [];
            for (const username of usernames) {
                repos = repos.concat(await fetchRepos(username));
            }
            console.log(repos);
            console.log(repos.map(r => r.node_id).sort());
            console.log(Array.from(new Set(repos.map(r => r.node_id))));
            // calculate stats from all repos
            const stats = calculateStats(repos);

            // Only show the Github repos which were updated within the last month
            const filterDate = new Date();
            filterDate.setMonth(filterDate.getMonth() - 1);
            repos = repos.filter(repo => repo.updated_at > filterDate);

            // sort by stars
            repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

            if (limit && limit > 0) {
                repos = repos.slice(0, limit);
            }
            console.log(repos);
            this.setState({ repos, stats, ready: true, error: false });
        } catch (err) {
            console.error(err);
            this.setState({ error: true });
        }
    }

}
