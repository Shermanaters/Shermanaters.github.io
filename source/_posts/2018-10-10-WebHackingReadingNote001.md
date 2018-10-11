---
layout: post
title: Web Hacking 101 Reading Note 001
date: 2018-10-10
tags: [WebHacking101, HTTP/HTTPS]
---

## <font color=#FA8072>**HTTP requests methods**</font>
The methods defined include GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT and OPTIONS.

### <font color=#F4A460>*GET*</font>
The GET method means to retrieve whatever information is identified by the request Uniform Request Identifier (URI). Typically GET requests should not be associated with any data altering functions, they should just retrieve and provide data.

### <font color=#F4A460>*HEAD*</font>
The HEAD method is identical to the GET message except the server must not return a message body in the response. Typically you won't often see this used but apparently it is often employed for testing hypertext links for validity, accessibility and recent changes.

### <font color=#F4A460>*POST*</font>
The POST method is used to invoke some function to be performed by the server, as determined by the server. In other words, Typically there will be some type of back end action performed like creating a comment, registering a user, deleting an account, etc. The action performed by the server in response to the POST can very and doesn't have to result in action being taken.

### <font color=#F4A460>*PUT*</font>
The PUT methods is used when invoking some function but referring to an already existing entity. For example, when updating your account, updating a blog post, etc. Again, the action performed can very and may result in the server taking no action at all.

### <font color=#F4A460>*DELETE*</font>
The DELETE method is just as it sounds, it is used to invoke a request for the remote server to delete a resource identified by the URI.

### <font color=#F4A460>*TRACE*</font>
The TRACE method is another uncommon method, this time used to reflect back the request message to the requester. This allows the requester to see what is being received by the server and to use that information for testing and diagnostic information.

### <font color=#F4A460>*CONNECT*</font>
The CONNECT method is actually reserved for use with proxy (a proxy is basically a server which forwards requests to other servers)

### <font color=#F4A460>*OPTIONS*</font>
The OPTIONS method is used to request information from a server about the communication options available. For example, calling for OPTIONS may indicate that the server accepts GET, POST, PUT, DELETE and OPTIONS calls but not HEAD or TRACE.
