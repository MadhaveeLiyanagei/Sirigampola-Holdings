import React, {Component} from 'react';
import {
    CloseButton, Col,
    Image,
    ListGroup,
    ListGroupItem,
    Nav,
    Row
} from "react-bootstrap";

import {Link, withRouter} from "react-router-dom";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import AuthenticationService from './Authentication/AuthenticationService';
import CreateBuyerOrdersComponent from './CreateBuyerOrdersComponent';
import ListBuyerOrdersComponent from './ListBuyerOrdersComponent';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true,
            loadContent: 'dashboard',
            dashboard: true,  //default tab
            classroom: false,
            notice: false,
            library: false,
            user: false,
            
        }
    }

    componentDidMount() {
    }

    /**
     * Side bar opening method
     */
    handleSideBarOpen = () => {
        this.setState({
            show: true
        })
    }

    /**
     * Side bar closing method
     */
    handleSideBarClose = () => {
        this.setState({
            show: false
        })
    }

    /**
     * This method change list item active state
     * and icon color when selected.
     * @param item - item you want to be active
     */
    listItemActive = (item) => {

        if (item === "products") {
            this.setState({
                dashboard: true,
                classroom: false,
                notice: false,
                library: false,
                user: false,
               
                loadContent: 'dashboard',
            })
        } else if (item === "classroom") {
            this.setState({
                
                loadContent: 'classroom',
            })
        } else if (item === "notice") {
            this.setState({
                
                loadContent: 'notice',
            })
        } else if (item === "library") {
            this.setState({
                dashboard: false,
                classroom: false,
                notice: false,
                library: true,
                user: false,
               
                loadContent: 'library',
            })
        } else if (item === "user") {
            this.setState({
                dashboard: false,
                classroom: false,
                notice: false,
                library: false,
                user: true,
               
                loadContent: 'user',
            })
        }

        // this.handleSideBarClose()
    }

    /**
     * This method change the is to change the loading
     * component for the relevant header.
     * @param content - which component to be displayed
     */
    loadContent = (content) => {
        this.setState({
            loadContent: content
        })
    }

    /**
     * Sign out the user and redirect to home
     */
    logout = () => {
        AuthenticationService.logout();
        this.props.history.push("/")
    }

    render() {
        const {
            dashboard,
            classroom,
            notice,
            library,
            user,
            dashboard_icon,
            classroom_icon,
            notice_icon,
            library_icon,
            user_icon,
            isUserLoggedIn,
            loggedInUsername,
            loadContent
        } = this.state

        const loggedUserRole = AuthenticationService.loggedUserRole();
        let loggedAsAdmin = false;
        let loggedAsTeacher = false;
        let loggedAsStudent = false;

        if (loggedUserRole != null && loggedUserRole === 'admin') {
            loggedAsAdmin = true;
        }
        if (loggedUserRole != null && loggedUserRole === 'teacher') {
            loggedAsTeacher = true;
        }
        if (loggedUserRole != null && loggedUserRole === 'student') {
            loggedAsStudent = true;
        }

        return (
            <div>
                {   isUserLoggedIn &&
                <div className={"div-admin-grid"}>
                    {/------------------------------------------------- Sidebar Navigation -------------------------------------------------/}
                    <div>
                        <div className={"wrapper"}>
                            <div className={"sidebar-top"}>
                                {/----------------- Sidebar Logo Image and Close button -----------------/}
                                {/logo bg image has been added with css/}
                                <div className={"sidebar-top-image"}>
                                </div>
                            </div>

                            {/----------------- Sidebar Navigation Tabs -----------------/}
                            <div className={"sidebar-middle"}>
                                <ListGroup variant="flush">
                                    { isUserLoggedIn &&
                                    <Link className={"dashboard-links"}>
                                        <ListGroupItem active={dashboard}
                                                       onClick={() => this.listItemActive("dashboard")}>
                                            <div className={"dashboard-icon"}>
                                                <Image src={dashboard_icon} className={"dash-svg-icon"}/>
                                                <div className={"icon-text"}>DASHBOARD</div>
                                            </div>
                                        </ListGroupItem>
                                    </Link>
                                    }

                                    <Link className={"dashboard-links"}>
                                        <ListGroupItem active={classroom}
                                                       onClick={() => this.listItemActive("classroom")}>
                                            <div className={"dashboard-icon"}>
                                                <Image src={classroom_icon} className={"dash-svg-icon"}/>
                                                <div className={"icon-text"}>CLASSROOM</div>
                                            </div>
                                        </ListGroupItem>
                                    </Link>

                                    <Link className={"dashboard-links"}>
                                        <ListGroupItem active={notice}
                                                       onClick={() => this.listItemActive("notice")}>
                                            <div className={"dashboard-icon"}>
                                                <Image src={notice_icon} className={"dash-svg-icon"}/>
                                                <div className={"icon-text"}>NOTICE</div>
                                            </div>
                                        </ListGroupItem>
                                    </Link>

                                    <Link className={"dashboard-links"}>
                                        <ListGroupItem active={library}
                                                       onClick={() => this.listItemActive("library")}>
                                            <div className={"dashboard-icon"}>
                                                <Image src={library_icon} className={"dash-svg-icon"}/>
                                                <div className={"icon-text"}>LIBRARY</div>
                                            </div>
                                        </ListGroupItem>
                                    </Link>

                                    { loggedAsAdmin &&
                                    <Link className={"dashboard-links"}>
                                        <ListGroupItem active={user}
                                                       onClick={() => this.listItemActive("user")}>
                                            <div className={"dashboard-icon"}>
                                                <Image src={user_icon} className={"dash-svg-icon"}/>
                                                <div className={"icon-text"}>USER</div>
                                            </div>
                                        </ListGroupItem>
                                    </Link>
                                    }
                                </ListGroup>
                            </div>

                            {/----------------- Logout Tab -----------------/}
                            <div className={"sidebar-bottom"}>
                                <div className={"logout-div"}>
                                    <div className={"dashboard-icon"} onClick={this.logout}>
                                       {/*<Image src={logout} className={"dash-svg-icon"}/>*/}
                                        <div className={"icon-text"}>SIGN OUT</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/------------------------------------------------- Secondary Navigation Header -------------------------------------------------/}
                        <div>
                            <div className={"secondary-nav"}>
                                <Row>

                                    <Col className={"pl-0"}>

                                        {/----------------- Secondary Nav buttons -----------------/}
                                        {dashboard &&
                                        <Nav variant="pills" defaultActiveKey="board">
                                            <Nav.Item onClick={() => this.loadContent("dashboard")}>
                                                <Nav.Link eventKey="board">
                                                    <div className={"second-nav-item-link"}>DASHBOARD</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        }

                                        {/-------------------------------------------------------------------------------------/}
                                        {classroom &&
                                        <Nav variant="pills" defaultActiveKey="classes">
                                            <Nav.Item onClick={() => this.loadContent("classroom")}>
                                                <Nav.Link eventKey="classes">
                                                    <div className={"second-nav-item-link"} >CLASSROOMS</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            { loggedAsTeacher &&
                                            <Nav.Item>
                                                <Nav.Link eventKey="add-class" onClick={() => this.loadContent("class-admin-add")}>
                                                    <div className={"second-nav-item-link"}>ADD CLASSROOM</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            }
                                        </Nav>
                                        }

                                        {/-------------------------------------------------------------------------------------/}
                                        {notice &&
                                        <Nav variant="pills" defaultActiveKey="notices">
                                            <Nav.Item onClick={() => this.loadContent("notice")}>
                                                <Nav.Link eventKey="notices">
                                                    <div className={"second-nav-item-link"}>NOTICES</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            { loggedAsAdmin &&
                                            <Nav.Item onClick={() => this.loadContent("notice-admin-add")}>
                                                <Nav.Link eventKey="add-notice">
                                                    <div className={"second-nav-item-link"}>ADD NOTICE</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            }

                                        </Nav>
                                        }

                                        {/-------------------------------------------------------------------------------------/}
                                        {library &&
                                        <Nav variant="pills" defaultActiveKey="library">
                                            { loggedAsAdmin &&
                                            <Nav.Item onClick={() => this.loadContent("library")}>
                                                <Nav.Link eventKey="library">
                                                    <div className={"second-nav-item-link"}>LIBRARIES</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            }

                                            { loggedAsAdmin &&
                                            <Nav.Item onClick={() => this.loadContent("library-admin-add")}>
                                                <Nav.Link eventKey="add-library">
                                                    <div className={"second-nav-item-link"}>ADD RESOURCES</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            }

                                            { !loggedAsAdmin &&
                                            <Nav.Item onClick={() => this.loadContent("library")}>
                                                <Nav.Link eventKey="library">
                                                    <div className={"second-nav-item-link"}>SYLLABUS</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            }

                                            { !loggedAsAdmin &&
                                            <Nav.Item onClick={() => this.loadContent("library-t")}>
                                                <Nav.Link eventKey="library-t">
                                                    <div className={"second-nav-item-link"}>TEACHERS' GUIDE</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            }
                                        </Nav>
                                        }

                                        {/-------------------------------------------------------------------------------------/}
                                        {user &&
                                        <Nav variant="pills" defaultActiveKey="user">
                                            <Nav.Item onClick={() => this.loadContent("user")}>
                                                <Nav.Link eventKey="user">
                                                    <div className={"second-nav-item-link"}>USERS</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item onClick={() => this.loadContent("user-admin-add")}>
                                                <Nav.Link eventKey="add-user">
                                                    <div className={"second-nav-item-link"}>ADD USER</div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        }
                                    </Col>
                                    <Col xxl={2} lg={2} md={3} sm={5} xs={4} className={"pt-2 text-end"}>
                                        <h6 className={"pt-1"}>Hi, {loggedInUsername}</h6>
                                    </Col>

                                </Row>

                            </div>

                        </div>

                        {/------------------------------------------------------------- Content ------------------------------------------------------------/}
                        <div className={"main-content"}>
                            <div>
                                {/------------------------------------------ DASHBOARD -------------------------------------------/}

                                {/******** ADMIN ********/}
                                { loggedAsAdmin && loadContent === 'dashboard' &&
                                <div>
                                    < CreateBuyerOrdersComponent/>
                                </div>
                                }
                                {/*******************/}


                                {/******** TEACHER ********/}
                                { loggedAsTeacher && loadContent === 'dashboard' &&
                                <div>
                                    <CreateBuyerOrdersComponent />
                                </div>
                                }

                                {/*******************/}


                                {/******** STUDENT ********/}
                                { loggedAsStudent && loadContent === 'dashboard' &&
                                <div>
                                    < CreateBuyerOrdersComponent/>
                                </div>
                                }

                                {/*******************/}
                                {/--------------------------------------------------------------------------------------------/}


                                {/---------------------------------------- CLASSROOM -----------------------------------------/}

                                {/******** ADMIN ********/}
                                { loggedAsAdmin && loadContent === 'classroom' &&
                                <div>
                                    <ListBuyerOrdersComponent/>
                                </div>
                                }
                                { loadContent === 'class-admin-add' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }
                                {/*******************/}


                                {/******** TEACHER ********/}
                                { loggedAsTeacher && loadContent === 'classroom' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }

                                {/*******************/}


                                {/******** STUDENT ********/}
                                { loggedAsStudent && loadContent === 'classroom' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }

                                {/*******************/}
                                {/--------------------------------------------------------------------------------------------/}


                                {/------------------------------------------ NOTICE -------------------------------------------/}

                                {/******** ADMIN ********/}
                                { loggedAsAdmin && loadContent === 'notice' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }
                                { loadContent === 'notice-admin-add' &&
                                <div>
                                    <ListBuyerOrdersComponent/>
                                </div>
                                }
                                {/*******************/}


                                {/******** TEACHER ********/}
                                { loggedAsTeacher && loadContent === 'notice' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }

                                {/*******************/}


                                {/******** STUDENT ********/}
                                { loggedAsStudent && loadContent === 'notice' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }

                                {/*******************/}
                                {/--------------------------------------------------------------------------------------------/}


                                {/------------------------------------------ LIBRARY -------------------------------------------/}

                                {/******** ADMIN ********/}
                                { loggedAsAdmin && loadContent === 'library' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }
                                { loadContent === 'library-admin-add' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }
                                {/*******************/}


                                {/******** TEACHER ********/}
                                { loggedAsTeacher && loadContent === 'library-t' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }
                                { loggedAsTeacher && loadContent === 'library' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }

                                {/*******************/}


                                {/******** STUDENT ********/}
                                { loggedAsStudent && loadContent === 'library-t' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }
                                { loggedAsStudent && loadContent === 'library' &&
                                <div>
                                    <ListBuyerOrdersComponent/>
                                </div>
                                }

                                {/*******************/}
                                {/--------------------------------------------------------------------------------------------/}


                                {/------------------------------------------ USER -------------------------------------------/}

                                {/******** ADMIN ********/}
                                { loadContent === 'user' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }
                                { loadContent === 'user-admin-add' &&
                                <div>
                                    <ListBuyerOrdersComponent />
                                </div>
                                }
                                {/*******************/}
                                {/--------------------------------------------------------------------------------------------/}

                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>

        )
    }
}

export default withRouter(Sidebar);