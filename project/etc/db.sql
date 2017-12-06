CREATE TABLE Member
(
    No              INT             NOT NULL, 
    Email       VARCHAR2(80)   		 NULL, 
    Password    VARCHAR2(50)   		 NULL , 
    Nickname        VARCHAR2(50)    NULL, 
    Regist_date     DATE            NULL, 
    Recent_visit    DATE            NULL,
    Visit_num		INT				NULL,
    Photo           VARCHAR2(40)    NULL, 
    CONSTRAINT MEMBER_PK PRIMARY KEY (No)
)

drop table Member

CREATE TABLE Fighters
(
    No        INT             NOT NULL, 
    FName     VARCHAR2(50)    NULL, 
    Weight    VARCHAR2(50)    NULL, 
    FPhoto    VARCHAR2(40)    NULL, 
    Win       INT             NULL, 
    Lose      INT             NULL, 
    Draw      INT             NULL, 
    CONSTRAINT FIGHTERS_PK PRIMARY KEY (No)
)

CREATE TABLE Login
(
    Email       VARCHAR2(80)    NULL, 
    Password    VARCHAR2(50)    NULL   
)


drop table Highlight

CREATE TABLE Highlight
(
    No            INT             NOT NULL, 
    title         VARCHAR2(80)    NULL, 
    Nickname      VARCHAR2(50)    NULL, 
    Contents      BLOB			  NULL, 
    Write_date    DATE            NULL, 
    Hit           INT             NULL, 
    Likes         INT             NULL, 
    CONSTRAINT HIGHLIGHT_PK PRIMARY KEY (No)
)

CREATE TABLE FreeBoard
(
    No            INT             NOT NULL, 
    title         VARCHAR2(80)    NULL, 
    Nickname      VARCHAR2(50)    NULL, 
    Contents      BLOB            NULL, 
    Write_date    DATE            NULL, 
    Hit            INT             NULL, 
    Likes          INT             NULL, 
    CONSTRAINT FREEBOARD_PK PRIMARY KEY (No)
)

CREATE TABLE Schedule_Result
(
    No           INT             NOT NULL, 
    Schedule     DATE            NULL, 
    Schedule2    VARCHAR2(15)    NULL, 
    L_FNo        INT             NULL, 
    L_Record     VARCHAR2(10)    NULL, 
    R_FNo        INT             NULL, 
    R_Record     VARCHAR2(10)    NULL, 
    CONSTRAINT SCHEDULE_RESULT_PK PRIMARY KEY (No)
)

CREATE TABLE News_Reply
(
    No            INT             NOT NULL, 
    PNo           INT             NULL, 
    Nickname      VARCHAR2(50)    NULL, 
    Write_date    DATE            NULL, 
    Contents      BLOB            NULL, 
    CONSTRAINT NEWS_REPLY_PK PRIMARY KEY (No)
)

CREATE TABLE Highlight_Reply
(
    No            INT             NOT NULL, 
    PNo           INT             NULL, 
    Nickname      VARCHAR2(50)    NULL, 
    Write_date    DATE            NULL, 
    Contents      BLOB            NULL, 
    CONSTRAINT HIGHLIGHT_REPLY_PK PRIMARY KEY (No)
)

CREATE TABLE FreeBoard_Reply
(
    No            INT             NOT NULL, 
    PNo           INT             NULL, 
    Nickname      VARCHAR2(50)    NULL, 
    Write_date    DATE            NULL, 
    Contents      BLOB            NULL, 
    CONSTRAINT FREEBOARD_REPLY_PK PRIMARY KEY (No)
)

CREATE TABLE Ranking_Record
(
    Rank    INT    NOT NULL, 
    FNo     INT    NULL, 
    CONSTRAINT RANKING_RECORD_PK PRIMARY KEY (Rank)
)

CREATE TABLE News
(
    No            INT             NOT NULL, 
    title         VARCHAR2(80)    NULL, 
    Nickname      VARCHAR2(50)    NULL, 
    Contents      BLOB            NULL, 
    Write_date    DATE            NULL, 
    Hit           INT             NULL, 
    Likes         INT             NULL, 
    CONSTRAINT NEWS_PK PRIMARY KEY (No)
)

INSERT INTO MEMBER
		(EMAIL, PASSWORD, NICKNAME)
		VALUES (email, password, nickname)

drop table Member
		
select * from member

CREATE SEQUENCE Member_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE OR REPLACE TRIGGER Member_No_AI_TRG
BEFORE INSERT ON Member 
REFERENCING NEW AS NEW FOR EACH ROW 
BEGIN 
    SELECT Member_SEQ.NEXTVAL
    INTO: NEW.No
    FROM DUAL;
END;



CREATE SEQUENCE News_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE SEQUENCE Highlight_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE SEQUENCE FreeBoard_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE SEQUENCE Schedule_Result_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE SEQUENCE News_Reply_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE SEQUENCE Highlight_Reply_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE SEQUENCE FreeBoard_Reply_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE SEQUENCE Ranking_Record_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE

CREATE SEQUENCE Fighters_SEQ
START WITH 1
INCREMENT BY 1
NOMAXVALUE
NOMINVALUE


