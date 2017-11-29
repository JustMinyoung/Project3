select * from FREEBOARD

drop table FREEBOARD_reply

drop table FREEBOARD CASCADE CONSTRAINT

drop sequence FREEBOARD_seq

CREATE SEQUENCE FreeBoard_SEQ
START WITH 1
INCREMENT BY 1

DELETE FROM FREEBOARD
WHERE no=1


INSERT INTO FREEBOARD
    (NO,title,Nickname,Contents)
VALUES (FreeBoard_SEQ.NEXTVAL,'제목1','닉네임1','컨텐츠1')


CREATE TABLE News
(
    No            INT               NOT NULL, 
    title         VARCHAR2(80)      NULL, 
    Nickname      VARCHAR2(50)      NULL, 
    Contents      VARCHAR2(4000)    NULL, 
    Write_date    DATE              NULL, 
    Hit           INT               NULL, 
    Likes         INT               NULL, 
    Thumbnail     VARCHAR2(150)     NULL, 
    Url           VARCHAR2(400)     NULL, 
    CONSTRAINT NEWS_PK PRIMARY KEY (No)
)



CREATE SEQUENCE News_SEQ
START WITH 1
INCREMENT BY 1



CREATE TABLE News_Reply
(
    No            INT               NOT NULL, 
    PNo           INT               NULL, 
    Nickname      VARCHAR2(50)      NULL, 
    Write_date    DATE              NULL, 
    Contents      VARCHAR2(4000)    NULL, 
    CONSTRAINT NEWS_REPLY_PK PRIMARY KEY (No)
)


CREATE TABLE Highlight
(
    No            INT               NOT NULL, 
    title         VARCHAR2(80)      NULL, 
    Nickname      VARCHAR2(50)      NULL, 
    Contents      VARCHAR2(4000)    NULL, 
    Write_date    DATE              NULL, 
    Hit           INT               NULL, 
    Likes         INT               NULL, 
    Thumbnail     VARCHAR2(150)     NULL, 
    Url           VARCHAR2(400)     NULL, 
    CONSTRAINT HIGHLIGHT_PK PRIMARY KEY (No)
)

CREATE SEQUENCE Highlight_SEQ
START WITH 1
INCREMENT BY 1

CREATE TABLE FreeBoard
(
    No            INT               NOT NULL, 
    title         VARCHAR2(80)      NULL, 
    Nickname      VARCHAR2(50)      NULL, 
    Contents      VARCHAR2(4000)    NULL, 
    Write_date    DATE              NULL, 
    Hit           INT               NULL, 
    Likes         INT               NULL, 
    CONSTRAINT FREEBOARD_PK PRIMARY KEY (No)
)
/

CREATE SEQUENCE FreeBoard_SEQ
START WITH 1
INCREMENT BY 1;



CREATE TABLE Highlight_Reply
(
    No            INT               NOT NULL, 
    PNo           INT               NULL, 
    Nickname      VARCHAR2(50)      NULL, 
    Write_date    DATE              NULL, 
    Contents      VARCHAR2(4000)    NULL, 
    CONSTRAINT HIGHLIGHT_REPLY_PK PRIMARY KEY (No)
)
/

CREATE SEQUENCE Highlight_Reply_SEQ
START WITH 1
INCREMENT BY 1;

CREATE TABLE FreeBoard_Reply
(
    No            INT               NOT NULL, 
    PNo           INT               NULL, 
    Nickname      VARCHAR2(50)      NULL, 
    Write_date    DATE              NULL, 
    Contents      VARCHAR2(4000)    NULL, 
    CONSTRAINT FREEBOARD_REPLY_PK PRIMARY KEY (No)
)
/

CREATE SEQUENCE FreeBoard_Reply_SEQ
START WITH 1
INCREMENT BY 1;





INSERT INTO FreeBoard
    (no,title, 
    Nickname, 
    Contents, 
    Write_date, 
    Hit, 
    Likes)
VALUES
    (FreeBoard_SEQ.NEXTVAL,'title 1', 
    'Nickname 1', 
    'Contents 1', 
    sysdate, 
    2, 
    2)
    
    select * from FREEBOARD
    
    select sequence_name from user_sequences