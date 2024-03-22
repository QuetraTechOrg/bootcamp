import React, { useState } from "react";
import "./App.css";
import { Button, Form, Stack, Col, Row, Container } from "react-bootstrap";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = React.useState("");
  const [action, setAction] = useState("save");
  const [index, setIndex] = useState(null);

  const handleNewTask = () => {
    if (newTask) {
      setTaskList((prev) => [...prev, newTask]);
      setNewTask("");
    }
  };
  const handleDeleteTask = (id) => {
    setTaskList(taskList.filter((item, index) => index !== id));
  };
  const triggerUpdateTask = (id, oldValue) => {
    setNewTask(oldValue);
    setAction("update");
    setIndex(id);
  };

  const handleUpdateTask = () => {
    if (index !== null && newTask) {
      setTaskList((prev) => {
        const updatedTasks = [...prev];
        updatedTasks[index] = newTask;
        return updatedTasks;
      });
      setAction("save");
      setIndex(null);
      setNewTask("");
    }
  };

  return (
    <>
      <h1>TODO APP</h1>

      <Container
        style={{
          marginTop: "5rem",
        }}
      >
        <Stack
          direction="horizontal"
          gap={3}
          style={{ justifyContent: "center" }}
        >
          <Row
            className="g-3"
            style={{ width: "80%", display: "flex", justifyContent: "center" }}
          >
            <Col xs={6}>
              <Form.Control
                type="text"
                placeholder="Add your item here..."
                style={{ width: "100%" }}
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </Col>
            <Col xs={2}>
              <Button
                variant="primary"
                style={{ width: "100%" }}
                onClick={action === "save" ? handleNewTask : handleUpdateTask}
              >
                {action === "save" ? "Submit" : "Update"}
              </Button>
            </Col>
            <Col xs={2}>
              <Button
                variant="outline-danger"
                style={{ width: "100%" }}
                onClick={() => setNewTask("")}
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Stack>

        {taskList.map((item, index) => (
          <Stack
            direction="horizontal"
            gap={3}
            style={{ marginTop: "2rem", justifyContent: "center" }}
            key={index}
          >
            <Row
              className="g-3"
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col xs={6}>
                <Form.Control
                  type="text"
                  disabled
                  style={{ width: "100%", textAlign: "center" }}
                  value={item}
                />
              </Col>
              <Col xs={2}>
                <Button
                  variant="secondary"
                  style={{ width: "100%" }}
                  onClick={() => triggerUpdateTask(index, item)}
                >
                  Update
                </Button>
              </Col>
              <Col xs={2}>
                <Button
                  variant="outline-danger"
                  style={{ width: "100%" }}
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Stack>
        ))}
      </Container>
    </>
  );
}

export default App;
