import React from 'react'
import "./Sidebar.css"; 
import Spotify from '../../assets/images/Spotify3.png';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "../../DataLayer";


function Sidebar() {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img src={Spotify} alt=""/>
            <SidebarOption Icon ={HomeIcon} title="Home"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br/>
            <strong className="sidebarTitle">PLAYLIST</strong>
            <hr/>
            {playlists?.items?.map((playlist)=> (
                <SidebarOption title={playlist.name}/>
            ))}
        </div>
    )
}

export default Sidebar
