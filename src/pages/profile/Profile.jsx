import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import React, { useState } from 'react';

const Profile = () => {
    return (
        <div className='profile-container' style={{ display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh' }}>
            <div style={{ justifyContent:'center'}}>
                <Card style={{ width: '500px', height: '500px', justifyItems: 'center' }}>
                    <Avatar image="https://avatars.githubusercontent.com/u/163360166?s=48&v=4" shape="circle" style={{ width: '200px', height: '200px'}} />
                </Card>
            </div>
        <Card style={{ width: '500px', height: '500px' }}>

        </Card>
    </div>)
    
}

export default Profile;