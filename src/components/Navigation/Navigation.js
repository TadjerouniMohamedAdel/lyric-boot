import React from 'react'
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import './Navigation.css'
export default function Navigation() {
    return (
        <div className="navigation">
           {/* Search</Link> */}
            {/* Favorites</Link>
           historique</Link> */}
            <Tabs
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Link className="link-router" to="/">
                        <Tab icon={<SearchIcon />} label="Search" />

                </Link>
                <Link className="link-router" to="/favorites">
                        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                </Link>
                <Link className="link-router" to="/history">
                        <Tab icon={<HistoryIcon />} label="HISTORY" />

                </Link>
            </Tabs>
        </div>
    )
}
