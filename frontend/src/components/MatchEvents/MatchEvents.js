import React, { Fragment, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import styles from "./MatchEvents.module.css";
import { Data } from "./data";

const MatchEvents = ({
    brandArray = Data,
    heading = 'AN ELEVATED EVENT EXPERINCE ',
    span = 'Here what you can expect from our events this season ',
    btnReq = true,
    data,
    seoAnalysis
}) => {
    const [id, setId] = useState("1");
    const Array = seoAnalysis ? data : brandArray
    return (
        <div className={styles.mainSelection}>
            <Container>
                <Row className={styles.row}>
                    <Fragment>
                        <Col className={styles.imgCol} lg={6}>
                            {Array.map(
                                (item) =>
                                    item.id === id && <img className="img-fluid" src={item.img} />
                            )}
                        </Col>
                        <Col className={styles.contentCol} lg={6}>
                            <div className={styles.tab}>
                                <ul className={styles.liCont}>
                                    {!seoAnalysis && <h1 className="headh1">
                                        {heading} <br />

                                        <span className='para_main'>{span}</span>
                                    </h1>}
                                    {Array.map((item) => (
                                        <li
                                            onClick={() => setId(item.id)}
                                            className={
                                                item.id === id ? styles.tabItemActive : styles.tabItem
                                            }
                                        >
                                            <h6
                                                style={{
                                                    textTransform: "uppercase",
                                                    padding: item.padding && "0px 0px 0px 0px",
                                                    font: "normal normal normal 25px/26px Granjon;",
                                                    color: item.id === id && "#fff",
                                                }}
                                            >
                                                {item.heading}
                                            </h6>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {!seoAnalysis && <div className={styles.box}>
                                {brandArray.map((item) => {
                                    if (item.id === id) {
                                        return item.listItems.map((listItem) => (
                                            <div className={styles.content_row} key={listItem.id}>
                                                <div className={styles.sectionBullets}>
                                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                                        <div class="d-flex align-items-center  icon-list gap-2 " ><img src="/images/icons/list-card-bullets.png" alt="icon" class="list-bullet" style={{ width: "10px" }} /><p class="para_main">{listItem.para}</p></div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-6 col-sm-12'>
                                                        <div class="d-flex align-items-center icon-list gap-2 " ><img src="/images/icons/list-card-bullets.png" alt="icon" class="list-bullet" style={{ width: "10px" }} /><p class="para_main">{listItem.paraOne}</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ));
                                    }
                                    return null;
                                })}
                            </div>}
                            {seoAnalysis && <div className={styles.box}>
                                {data.map((item) => {
                                    if (item.id === id) {
                                        return item.listItems.map((listItem) => (
                                            <div className={styles.content_row} key={listItem.id}>
                                                <div className={styles.details}>
                                                    <div className='col-lg-6 '>
                                                        <div class="d-flex align-items-center my-2 icon-list gap-2 " ><img src="/images/icons/list-card-bullets.png" alt="icon" class="list-bullet" /><p class="para_main">{listItem.para}</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ));
                                    }
                                    return null;
                                })}
                            </div>}
                        </Col>
                    </Fragment>
                </Row>
            </Container>
        </div>
    );
};

export default MatchEvents;