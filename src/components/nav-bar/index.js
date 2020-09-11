import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa'
import { MusicCol } from '../index'
import './index.css';


export default class NavBar extends Component {

    state = {
        term: '',
        name: null
    }

    searchOnChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    render() {

        // const li = this.props.trackList1.map(item => {            
        // return (
        //     <div className = 'Track '>
        //         <MusicCol
        //             onClick={() => {
        //                 this.setState({
        //                     selectedName: item.title,
        //                     selectedTrack: item.src,
        //                     display: 'flex',
        //                 })
        //                 localStorage.setItem('src', item.src)
        //             }
        //             }
        //             id={item.id}
        //             NameTrack={item.title}
        //             durationTrack={item.durationTrack}
        //             id={item.id}
        //         />
        //     </div>
        // )
        // })

        return (

            <div className='search-bar'>

                <input type="text" placeholder="трек, альбом, исполнитель" />
                    <div><span className = 'search-icon'><FaSearch /></span></div>

                    {/* <div className='SearchPanel'>
                    <input 
                    placeholder='Трек, альбом, исполнитель'
                    value={this.state.term}
                    onChange={this.searchOnChange}

                     />
                    <FaSearch
                        className='IconSearch'
                    />
                </div>
                <div className = 'SearchDiv'>
                    {this.props.term}
                </div> */}
            </div>
        )
    }
}