<?

$mysql = mysql_connect("localhost", "root", "root123")
		or die("could not connect to mysql");
mysql_select_db("Library")
		or die("select failed -" );
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Your request has been received</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js" type="text/javascript"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js" type="text/javascript"></script>
<script src="/js/" type="text/javascript" charset="UTF-8"></script>
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/base/jquery-ui.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="all" />

</head>
<body><font face="trebuchet MS">
<h1>Send request</h1>
<h2>Add bibliographic details of the requested book.</h2>
<form  action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
<table>
	<tr>
	<td >Author *: <p class=help-inline> Enter the firstname of the author. <br>* = Mandatory field.</P></td>
	<td><input type="text" name="author" width="60" placeholder="First name">
	</tr> 
	<tr>
        <td>Title *: <p class=help-inline> Enter the title of the book.</P></td>
        <td><input type="text" name="title" width="60" placeholder="Title">
        </tr>
        <tr>
	<td >ISBN: <p class=help-inline> Enter the ISBN of the book. <br></P></td>
	<td><input type="text" name="author" width="60" placeholder="ISBN">
	</tr>
	<tr>
	<td >Edition : <p class=help-inline> Enter the edition of the book. <br></P></td>
	<td><input type="text" name="ed" width="60" placeholder="Edition">
	</tr>
	<tr>
	<td >Publisher : <p class=help-inline> Enter the publisher of the book. <br></P></td>
	<td><input type="text" name="publisher" width="60" placeholder="Publisher name">
	</tr>
	<tr>
	<td >Any other information : <p class=help-inline> Enter any other relevant information about the book. <br></P></td>
	<td><input type="text" name="misc" width="60" placeholder="Any other releveant information">
	</tr>
<tr>
		<td colspan="2">
		<input class="btn blue" type="submit" name="submit" value="Send request">
		<input class="btn red" type="reset"  value="Reset">
		</td>
	</tr>

</table>
</form>

<?

if (!$_POST['Firstname'] && !$_POST['Surname']) 
{
die('<font color="red">You did not fill all of the required fields.</font> Please fill the details above and then click "Add author" button, thanks.');
}

$sql1 = mysql_query("INSERT INTO requests(author,title,isbn,ed,publisher,misc) VALUES ('$_POST[author]','$_POST[title]','$_POST[isbn]','$_POST[ed]','$_POST[publisher]','$_POST[misc]')")
 or die("Query failed - " . mysql_errno() . ": " . mysql_error()); 
 //$result = mysql_query("select Accn_No,ISBN,Title,concat (Authors.Firstname,' ', Authors.Surname) as Author, Publishers.Name as Publisher, Pages, Published,comments from book_authors,books,Authors,Publishers where book_authors.Book = Accn_No and authors.Author_ID = Author and Publishers.Publisher_ID = Publisher;")
$result = mysql_query("select * FROM requests")		
		or die("Query failed - " . mysql_errno() . ": " . mysql_error()); 
 ?>	
<table class="zebra-striped" align=center border="1"	>
<th>Request ID</th><th>Author</th><th>Title</th><th>ISBN</th><th>Edition</th><th>Publisher</th><th>Misc.</th>
<? 
	
//loop through each row
	while ($array = mysql_fetch_row($result)) :?>
		<tr>

		<td><? echo $array[0]; ?></td>
		<td><? echo $array[1]; ?></td>
		<td><? echo $array[2]; ?></td>
		<td><? echo $array[3]; ?></td>
		<td><? echo $array[4]; ?></td>
		<td><? echo $array[5]; ?></td>
		<td><? echo $array[6]; ?></td>
		
		
	</tr>
	
<? endwhile; ?>
</table>        
        
</html>


