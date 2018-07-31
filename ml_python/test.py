import serpy

class Foo(object):
    """The object to be serialized."""
    y = 'hello'
    z = 9.5

    
print(Foo.y)

class FooSerializer(serpy.Serializer):
    """The serializer schema definition."""
    # Use a Field subclass like IntField if you need more validation.
    y = serpy.Field()
    z = serpy.Field()

f = Foo()
print(FooSerializer(f).data)
# {'x': 1, 'y': 'hello', 'z': 9.5}

fs = [Foo() for i in range(100)]
FooSerializer(fs, many=True).data
# [{'x': 0, 'y': 'hello', 'z': 9.5}, {'x': 1, 'y': 'hello', 'z': 9.5}, ...]
