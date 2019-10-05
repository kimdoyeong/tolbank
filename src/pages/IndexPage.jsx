import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SEO from "../components/Layout/SEO";
import { Redirect } from "react-router-dom";

import style from "../styles/pages/index.module.css";
import Input from "../components/Form/Input";
import useFormState from "../lib/useFormState";
import Button from "../components/Form/Button";
import ErrorComponent from "../components/Error";
import { signIn } from "../store/auth";

const IndexPage = () => {
  const [id, idChange] = useFormState();
  const [password, pwChange] = useFormState();

  const dispatch = useDispatch();
  const { success, error } = useSelector(state => ({
    success: state.auth.success,
    error: state.auth.error
  }));

  function onsubmit(e) {
    e.preventDefault();

    dispatch(signIn({ id, password }));
  }
  return (
    <div className={style.wrap}>
      <SEO title="메인" />
      {success && <Redirect to="/drive" />}
      <div className={style.contents}>
        <ErrorComponent error={error} />
        <h1>Log In</h1>
        <form className={style.form} onSubmit={onsubmit}>
          <Input inputName="아이디" onChange={idChange} value={id} />
          <Input
            inputName="비밀번호"
            type="password"
            onChange={pwChange}
            value={password}
          />
          <Button>로그인</Button>
          <div style={{ padding: ".5em 0", display: "flex" }}>
            <Link to="/signup">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IndexPage;
