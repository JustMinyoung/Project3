<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<body>
	<header>
		<c:import url="/top" />
	</header>
	<div class="main_wrap">
		<c:import url="/form/${formPath }" />
	</div>
	<footer>
		<c:import url="/footer" />
	</footer>
</body>
</html>
