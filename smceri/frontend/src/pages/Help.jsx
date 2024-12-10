// Dashboard.jsx
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/_help.scss";
import '../scripts/default.js'; // Import JS functionality

const Help = () => {
    return (
        <div className="mt-3">
            <div className="pagetitle">
                <h1>Frequently Asked Questions</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item">Pages</li>
                        <li className="breadcrumb-item active">Frequently Asked Questions</li>
                    </ol>
                </nav>
            </div>{/* End Page Title */}
            <section className="section faq">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card basic">
                            <div className="card-body">
                                <h5 className="card-title">Basic Questions</h5>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            Nisi ut ut exercitationem voluptatem esse sunt rerum?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Saepe perspiciatis ea. Incidunt blanditiis enim mollitia qui
                                            voluptates. Id rem nulla tenetur nihil in unde rerum. Quae
                                            consequatur placeat qui cumque earum eius omnis quos.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Reiciendis dolores repudiandae?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Id ipsam non ut. Placeat doloremque deserunt quia tenetur
                                            inventore laboriosam dolores totam odio. Aperiam incidunt
                                            et. Totam ut quos sunt atque modi molestiae dolorem.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            Qui qui reprehenderit ut est illo numquam voluptatem?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Enim inventore in consequuntur ipsam voluptatem consequatur
                                            beatae. Nostrum consequuntur voluptates et blanditiis.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        {/* F.A.Q Group 1 */}
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Laborum dolorem quam porro</h5>
                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Debitis adipisci eius?</Accordion.Header>
                                        <Accordion.Body>
                                            Ut quasi odit odio totam accusamus vero eius. Nostrum
                                            asperiores voluptatem eos nulla ab dolores est asperiores
                                            iure.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Omnis fugiat quis repellendus?</Accordion.Header>
                                        <Accordion.Body>
                                            In minus quia impedit est quas deserunt deserunt et. Nulla
                                            non quo dolores minima fugiat aut saepe aut inventore.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            Et occaecati praesentium aliquam modi incidunt?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Voluptates magni amet enim perspiciatis atque excepturi
                                            itaque est.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/* Coluna 2 */}
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Deserunt ut unde corporis</h5>
                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            Cumque voluptatem recusandae blanditiis?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Ut quasi odit odio totam accusamus vero eius. Nostrum
                                            asperiores voluptatem eos nulla ab dolores est asperiores
                                            iure.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Provident beatae eveniet placeat est aperiam repellat
                                            adipisci?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            In minus quia impedit est quas deserunt deserunt et. Nulla
                                            non quo dolores minima fugiat aut saepe aut inventore.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>

                        {/* F.A.Q Group 3 */}
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Dolore occaecati ducimus quam</h5>
                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            Assumenda doloribus est fugiat sint incidunt animi totam nisi?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Ut quasi odit odio totam accusamus vero eius.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Consequatur saepe explicabo odio atque nisi?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            In minus quia impedit est quas deserunt deserunt et.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Help;
