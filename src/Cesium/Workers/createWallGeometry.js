define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-d1adddcb","./Transforms-ea828842","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-618451c9","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./IntersectionTests-43aa431f","./Plane-0cab2b36","./VertexFormat-7572c785","./EllipsoidTangentPlane-6135b6f5","./EllipsoidRhumbLine-8b165373","./PolygonPipeline-7bd8d933","./EllipsoidGeodesic-a4f6440a","./PolylinePipeline-7574302f","./WallGeometryLibrary-a6e43643"],function(Z,e,j,K,Q,t,a,X,$,ee,te,i,n,u,r,o,s,m,l,ae){"use strict";var ie=new K.Cartesian3,ne=new K.Cartesian3,re=new K.Cartesian3,oe=new K.Cartesian3,se=new K.Cartesian3,me=new K.Cartesian3,le=new K.Cartesian3,pe=new K.Cartesian3;function d(e){var t=(e=Z.defaultValue(e,Z.defaultValue.EMPTY_OBJECT)).positions,a=e.maximumHeights,i=e.minimumHeights,n=Z.defaultValue(e.vertexFormat,u.VertexFormat.DEFAULT),r=Z.defaultValue(e.granularity,j.CesiumMath.RADIANS_PER_DEGREE),o=Z.defaultValue(e.ellipsoid,K.Ellipsoid.WGS84);this._positions=t,this._minimumHeights=i,this._maximumHeights=a,this._vertexFormat=u.VertexFormat.clone(n),this._granularity=r,this._ellipsoid=K.Ellipsoid.clone(o),this._workerName="createWallGeometry";var s=1+t.length*K.Cartesian3.packedLength+2;Z.defined(i)&&(s+=i.length),Z.defined(a)&&(s+=a.length),this.packedLength=s+K.Ellipsoid.packedLength+u.VertexFormat.packedLength+1}d.pack=function(e,t,a){var i;a=Z.defaultValue(a,0);var n=e._positions,r=n.length;for(t[a++]=r,i=0;i<r;++i,a+=K.Cartesian3.packedLength)K.Cartesian3.pack(n[i],t,a);var o=e._minimumHeights,r=Z.defined(o)?o.length:0;if(t[a++]=r,Z.defined(o))for(i=0;i<r;++i)t[a++]=o[i];var s=e._maximumHeights;if(r=Z.defined(s)?s.length:0,t[a++]=r,Z.defined(s))for(i=0;i<r;++i)t[a++]=s[i];return K.Ellipsoid.pack(e._ellipsoid,t,a),a+=K.Ellipsoid.packedLength,u.VertexFormat.pack(e._vertexFormat,t,a),t[a+=u.VertexFormat.packedLength]=e._granularity,t};var c=K.Ellipsoid.clone(K.Ellipsoid.UNIT_SPHERE),y=new u.VertexFormat,f={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:c,vertexFormat:y,granularity:void 0};return d.unpack=function(e,t,a){t=Z.defaultValue(t,0);for(var i,n,r=e[t++],o=new Array(r),s=0;s<r;++s,t+=K.Cartesian3.packedLength)o[s]=K.Cartesian3.unpack(e,t);if(0<(r=e[t++]))for(i=new Array(r),s=0;s<r;++s)i[s]=e[t++];if(0<(r=e[t++]))for(n=new Array(r),s=0;s<r;++s)n[s]=e[t++];var m=K.Ellipsoid.unpack(e,t,c);t+=K.Ellipsoid.packedLength;var l=u.VertexFormat.unpack(e,t,y),p=e[t+=u.VertexFormat.packedLength];return Z.defined(a)?(a._positions=o,a._minimumHeights=i,a._maximumHeights=n,a._ellipsoid=K.Ellipsoid.clone(m,a._ellipsoid),a._vertexFormat=u.VertexFormat.clone(l,a._vertexFormat),a._granularity=p,a):(f.positions=o,f.minimumHeights=i,f.maximumHeights=n,f.granularity=p,new d(f))},d.fromConstantHeights=function(e){var t=(e=Z.defaultValue(e,Z.defaultValue.EMPTY_OBJECT)).positions,a=e.minimumHeight,i=e.maximumHeight,n=Z.defined(a),r=Z.defined(i);if(n||r)for(var o=t.length,s=n?new Array(o):void 0,m=r?new Array(o):void 0,l=0;l<o;++l)n&&(s[l]=a),r&&(m[l]=i);return new d({positions:t,maximumHeights:m,minimumHeights:s,ellipsoid:e.ellipsoid,vertexFormat:e.vertexFormat})},d.createGeometry=function(e){var t=e._positions,a=e._minimumHeights,i=e._maximumHeights,n=e._vertexFormat,r=e._granularity,o=e._ellipsoid,s=ae.WallGeometryLibrary.computePositions(o,t,i,a,r,!0);if(Z.defined(s)){for(var m=s.bottomPositions,l=s.topPositions,p=s.numCorners,u=l.length,d=2*u,c=n.position?new Float64Array(d):void 0,y=n.normal?new Float32Array(d):void 0,f=n.tangent?new Float32Array(d):void 0,g=n.bitangent?new Float32Array(d):void 0,h=n.st?new Float32Array(d/3*2):void 0,C=0,v=0,A=0,b=0,x=0,_=pe,E=le,w=me,F=!0,L=0,k=1/((u/=3)-t.length+1),G=0;G<u;++G){var P,H,V,T,D,z=3*G,O=K.Cartesian3.fromArray(l,z,ie),S=K.Cartesian3.fromArray(m,z,ne);n.position&&(c[C++]=S.x,c[C++]=S.y,c[C++]=S.z,c[C++]=O.x,c[C++]=O.y,c[C++]=O.z),n.st&&(h[x++]=L,h[x++]=0,h[x++]=L,h[x++]=1),(n.normal||n.tangent||n.bitangent)&&(H=K.Cartesian3.clone(K.Cartesian3.ZERO,se),V=o.scaleToGeodeticSurface(K.Cartesian3.fromArray(l,z,ne),ne),G+1<u&&(P=o.scaleToGeodeticSurface(K.Cartesian3.fromArray(l,3+z,re),re),H=K.Cartesian3.fromArray(l,3+z,se)),F&&(T=K.Cartesian3.subtract(H,O,oe),D=K.Cartesian3.subtract(V,O,ie),_=K.Cartesian3.normalize(K.Cartesian3.cross(D,T,_),_),F=!1),K.Cartesian3.equalsEpsilon(P,V,j.CesiumMath.EPSILON10)?F=!0:(L+=k,n.tangent&&(E=K.Cartesian3.normalize(K.Cartesian3.subtract(P,V,E),E)),n.bitangent&&(w=K.Cartesian3.normalize(K.Cartesian3.cross(_,E,w),w))),n.normal&&(y[v++]=_.x,y[v++]=_.y,y[v++]=_.z,y[v++]=_.x,y[v++]=_.y,y[v++]=_.z),n.tangent&&(f[b++]=E.x,f[b++]=E.y,f[b++]=E.z,f[b++]=E.x,f[b++]=E.y,f[b++]=E.z),n.bitangent&&(g[A++]=w.x,g[A++]=w.y,g[A++]=w.z,g[A++]=w.x,g[A++]=w.y,g[A++]=w.z))}var I=new ee.GeometryAttributes;n.position&&(I.position=new $.GeometryAttribute({componentDatatype:X.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c})),n.normal&&(I.normal=new $.GeometryAttribute({componentDatatype:X.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),n.tangent&&(I.tangent=new $.GeometryAttribute({componentDatatype:X.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})),n.bitangent&&(I.bitangent=new $.GeometryAttribute({componentDatatype:X.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g})),n.st&&(I.st=new $.GeometryAttribute({componentDatatype:X.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:h}));var R=d/3;d-=6*(p+1);var M=te.IndexDatatype.createTypedArray(R,d),N=0;for(G=0;G<R-2;G+=2){var W,B,U=G,q=G+2,J=K.Cartesian3.fromArray(c,3*U,ie),Y=K.Cartesian3.fromArray(c,3*q,ne);K.Cartesian3.equalsEpsilon(J,Y,j.CesiumMath.EPSILON10)||(W=G+1,B=G+3,M[N++]=W,M[N++]=U,M[N++]=B,M[N++]=B,M[N++]=U,M[N++]=q)}return new $.Geometry({attributes:I,indices:M,primitiveType:$.PrimitiveType.TRIANGLES,boundingSphere:new Q.BoundingSphere.fromVertices(c)})}},function(e,t){return Z.defined(t)&&(e=d.unpack(e,t)),e._ellipsoid=K.Ellipsoid.clone(e._ellipsoid),d.createGeometry(e)}});
