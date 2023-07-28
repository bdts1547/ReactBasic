import React from 'react';


class ChildComponent extends React.Component {
    state = {
        isShowJob: false,
    }





    /*  #####################
        ### @Handle Event ###
        ##################### */

    handleShowJob = () => {
        this.setState({
            isShowJob: !this.state.isShowJob,
        })
    }

    handleDeleteJob = (job) => {
        console.log(job)
        this.props.deleteJob(job)
    }

    render() {
        let {arr} = this.props;
        return (
            <div className="child-component">
                
                {
                    this.state.isShowJob ? 
                    <>
                    <div>
                        {
                            arr.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} 
                                        <button onClick={() => this.handleDeleteJob(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <div><button onClick={() => this.handleShowJob()}>Hide</button></div>
                    </>
                    :
                        <div><button onClick={() => this.handleShowJob()}>Show</button></div>
                        
                }
            </div>
        )
    }



}

export default ChildComponent;

