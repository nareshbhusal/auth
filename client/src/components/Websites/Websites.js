import React, { useState } from 'react';
import styles from './Websites.module.css';

import Message from '../Message/Message';

const Websites = ({ websites=[], updateData }) => {

    const [website, setWebsite] = useState('');
    const [msg, setMsg] = useState({
        error:'',
        success:''
    });

    const addWebsite = async (e) => {
        e.preventDefault();
        const newWebsites = [...websites];
        if (!website) {
            setMsg({ success: '', error: "Umm... you didn't enter anything"})
        } else if (!urlValid) {
            setMsg({ success:'', error: "That's not a valid url..."});

        } else if (urlValid && !isUrlHostname) {
            setMsg({ success:'', error: "Remove http protocal, 'www' or any directory from the url"})
        } else if (websites.indexOf(website.toLowerCase())!==-1) {
            setMsg({ success:'', error: "This website already exists in your dashboard"});
        }   
        if (isUrlHostname) {
            setMsg({ error: '', success: '' });
            newWebsites.push(website);

            const { err } = await updateData({ websites: newWebsites });

            if (err) {
                setMsg({ error: err,  success: '' });
            } else {
                setWebsite('');
                setMsg({ error:'', success: `${website} has been entered! You can switch from the dashboard.` });
            }
        }
    }

    const isUrlValid = () => {
        const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        return website.match(new RegExp(urlRegex));
    }
    const getHostname = () => {
        const hostnameReg = /^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
        const hostnames = website.match(new RegExp(hostnameReg)) || [];
        return hostnames[1];
    }

    const urlValid = isUrlValid();
    const hostname = getHostname();
    const isUrlHostname = hostname && website && isUrlValid() ? hostname.toLowerCase()===website.toLowerCase() : false;


    const deleteWebsite = async (indexToDelete) => {
        const newWebsites = [...websites];
        const websiteToDelete = websites[indexToDelete];

        if(confirm(`delete ${websiteToDelete} and all it's data?`)) {
            newWebsites.splice(indexToDelete, 1);

            let msg = await updateData({ websites: newWebsites });
            msg.msg ? setMsg({ error: '', success: `${websiteToDelete} deleted!` }) : null;
            msg.err ? setMsg({ success: '', error: `${err}` }) : null;
        }
    }


    return (
        <div className={styles.container}>
            <Message error={ msg.error } success={msg.success} />
            <form onSubmit={async (e) =>await addWebsite(e)} className={styles.add}>
                <input 
                    placeholder="newwebsite.com"
                    required
                    style={isUrlHostname || !website ? {borderColor: 'green'} : {borderColor: 'red'}}
                    className={styles.website}
                    onChange={(e)=>setWebsite(e.target.value.trim())} 
                    value={website}
                    type="text" />

                <button onClick={async () =>await addWebsite}>
                    <i className="fa fa-plus-circle"></i>
                    <span>
                        Add new website
                    </span>
                </button>
            </form>
            <div className={styles.websites}>
                {websites.length ? 
                    websites.map((website, index) => {
                        return (
                            <div key={`${website}${index}`} className={styles.website}>
                                <p>{website}</p>
                                <button 
                                onClick={async ()=>await deleteWebsite(index)}
                                className={styles.delete}>
                                    <i className="fa fa-times-circle-o"></i>
                                </button>
                            </div>
                        );
                    })
                : 
                <p>You've not added any website yet!</p>
                }
            </div>
        </div>
    );
}

export default Websites;