import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import SEO from "../components/Layout/SEO";
import { wrap, contents } from "../styles/pages/index.module.css";
import Input from "../components/Form/Input";
import useFormState from "../lib/useFormState";
import Button from "../components/Form/Button";

import { useSelector, useDispatch } from "react-redux";
import ErrorComponent from "../components/Error";
import { createUser, createUsetInit } from "../store/signup";
function SignUpPage() {
  const [id, idChange] = useFormState();
  const [password, pwChange] = useFormState();
  const [pwAcc, pwAccChange] = useFormState();
  const [username, usernameChange] = useFormState();
  const { success, error } = useSelector(state => ({
    success: state.signup.success,
    error: state.signup.error
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    if (success) dispatch(createUsetInit());
  }, [success, dispatch]);

  function onsubmit(e) {
    e.preventDefault();
    if (password !== pwAcc) {
      alert("비밀번호가 다릅니다.");
      return;
    }
    if (!password || !id || !username) {
      alert("필수 항목이 없습니다.");
      return;
    }
    dispatch(
      createUser({
        id,
        username,
        password
      })
    );
  }

  return (
    <div className={wrap}>
      <SEO title="회원가입" />
      {success && <Redirect to="/" />}
      <div className={contents}>
        <ErrorComponent error={error} />
        <h1>Sign Up</h1>
        <form style={{ marginTop: "1em" }} onSubmit={onsubmit}>
          <Input inputName="아이디" value={id} onChange={idChange} />
          <Input
            inputName="비밀번호"
            type="password"
            value={password}
            onChange={pwChange}
          />
          <Input
            inputName="비밀번호 확인"
            value={pwAcc}
            type="password"
            onChange={pwAccChange}
          />
          <Input
            inputName="유저 이름"
            value={username}
            onChange={usernameChange}
          />
          <Button>회원가입</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
